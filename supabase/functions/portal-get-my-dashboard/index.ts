import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

serve(async (req) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        // Get JWT from Authorization header
        const authHeader = req.headers.get('Authorization')
        if (!authHeader) {
            return new Response(
                JSON.stringify({ error: 'Missing authorization header' }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 401 }
            )
        }

        // Create client with user's JWT
        const supabase = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_ANON_KEY') ?? '',
            {
                global: { headers: { Authorization: authHeader } },
                auth: { persistSession: false }
            }
        )

        // Get the authenticated user
        const { data: { user }, error: userError } = await supabase.auth.getUser()
        if (userError || !user) {
            return new Response(
                JSON.stringify({ error: 'Unauthorized' }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 401 }
            )
        }

        // Get client profile
        const { data: clientData, error: clientError } = await supabase
            .from('portal_clients')
            .select('*')
            .eq('auth_user_id', user.id)
            .single()

        if (clientError || !clientData) {
            return new Response(
                JSON.stringify({ error: 'Client profile not found' }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 404 }
            )
        }

        // Get policies
        const { data: policies, error: policiesError } = await supabase
            .from('policies')
            .select('*')
            .eq('client_id', clientData.id)
            .order('expiration_date', { ascending: true })

        // Get recent documents
        const { data: documents, error: docsError } = await supabase
            .from('documents')
            .select('*')
            .eq('client_id', clientData.id)
            .order('created_at', { ascending: false })
            .limit(10)

        // Get pending requests
        const { data: pendingRequests, error: requestsError } = await supabase
            .from('service_requests')
            .select('*')
            .eq('client_id', clientData.id)
            .in('status', ['pending', 'in_progress'])
            .order('created_at', { ascending: false })

        return new Response(
            JSON.stringify({
                user: {
                    id: clientData.id,
                    email: clientData.email,
                    first_name: clientData.first_name,
                    last_name: clientData.last_name,
                    phone: clientData.phone,
                    address_line1: clientData.address_line1,
                    city: clientData.city,
                    state: clientData.state,
                    zip_code: clientData.zip_code
                },
                policies: policies || [],
                documents: documents || [],
                pending_requests: pendingRequests || []
            }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )

    } catch (err) {
        return new Response(
            JSON.stringify({ error: 'Server error' }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
        )
    }
})
