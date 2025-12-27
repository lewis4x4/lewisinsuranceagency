import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

serve(async (req) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const { request_type, request_title, request_data, policy_id } = await req.json()

        if (!request_type || !request_title) {
            return new Response(
                JSON.stringify({ error: 'Request type and title are required' }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
            )
        }

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

        // Get client ID
        const { data: client, error: clientError } = await supabase
            .from('portal_clients')
            .select('id')
            .eq('auth_user_id', user.id)
            .single()

        if (clientError || !client) {
            return new Response(
                JSON.stringify({ error: 'Client profile not found' }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 404 }
            )
        }

        // If policy_id provided, verify it belongs to this client (RLS handles this)
        if (policy_id) {
            const { data: policy, error: policyError } = await supabase
                .from('policies')
                .select('id')
                .eq('id', policy_id)
                .single()

            if (policyError || !policy) {
                return new Response(
                    JSON.stringify({ error: 'Policy not found or access denied' }),
                    { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 404 }
                )
            }
        }

        // Create the service request
        const { data: request, error: insertError } = await supabase
            .from('service_requests')
            .insert({
                client_id: client.id,
                policy_id: policy_id || null,
                request_type,
                request_title,
                request_data: request_data || {},
                status: 'pending'
            })
            .select()
            .single()

        if (insertError) {
            return new Response(
                JSON.stringify({ error: 'Failed to create request' }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
            )
        }

        return new Response(
            JSON.stringify({
                request_id: request.id,
                message: 'Your request has been submitted. We will contact you within 1 business day.'
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
