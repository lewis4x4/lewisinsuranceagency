import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

serve(async (req) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const { email } = await req.json()

        if (!email) {
            return new Response(
                JSON.stringify({ status: 'error', message: 'Email is required', can_proceed: false }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 400 }
            )
        }

        // Create admin client to bypass RLS
        const supabaseAdmin = createClient(
            Deno.env.get('SUPABASE_URL') ?? '',
            Deno.env.get('SUPABASE_SERVICE_ROLE_KEY') ?? '',
            { auth: { persistSession: false } }
        )

        // Check if email exists in portal_clients
        const { data: client, error } = await supabaseAdmin
            .from('portal_clients')
            .select('id, status, first_name')
            .eq('email', email.toLowerCase())
            .single()

        if (error || !client) {
            // No invitation found
            return new Response(
                JSON.stringify({
                    status: 'not_invited',
                    message: 'This email is not registered for portal access. Please contact your agent.',
                    can_proceed: false
                }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        if (client.status === 'inactive') {
            return new Response(
                JSON.stringify({
                    status: 'inactive',
                    message: 'Your portal access has been deactivated. Please contact your agent.',
                    can_proceed: false
                }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
            )
        }

        // Client is invited or active - they can proceed to login
        return new Response(
            JSON.stringify({
                status: client.status === 'active' ? 'active' : 'invited',
                message: client.status === 'active'
                    ? `Welcome back${client.first_name ? ', ' + client.first_name : ''}!`
                    : 'Welcome! Complete login to activate your portal access.',
                can_proceed: true
            }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        )

    } catch (err) {
        return new Response(
            JSON.stringify({ status: 'error', message: 'Server error', can_proceed: false }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
        )
    }
})
