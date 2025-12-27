import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

serve(async (req) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const { policy_id } = await req.json()

        if (!policy_id) {
            return new Response(
                JSON.stringify({ error: 'Policy ID is required' }),
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

        // Create client with user's JWT (RLS will ensure they can only see their own policies)
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

        // Get policy details (RLS will filter to user's policies only)
        const { data: policy, error: policyError } = await supabase
            .from('policies')
            .select('*')
            .eq('id', policy_id)
            .single()

        if (policyError || !policy) {
            return new Response(
                JSON.stringify({ error: 'Policy not found' }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 404 }
            )
        }

        // Get documents for this policy
        const { data: documents } = await supabase
            .from('documents')
            .select('*')
            .eq('policy_id', policy_id)
            .order('created_at', { ascending: false })

        // Get service requests for this policy
        const { data: requests } = await supabase
            .from('service_requests')
            .select('*')
            .eq('policy_id', policy_id)
            .order('created_at', { ascending: false })

        return new Response(
            JSON.stringify({
                ...policy,
                documents: documents || [],
                requests: requests || []
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
