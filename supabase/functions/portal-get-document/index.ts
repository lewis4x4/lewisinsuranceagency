import { serve } from 'https://deno.land/std@0.168.0/http/server.ts'
import { createClient } from 'https://esm.sh/@supabase/supabase-js@2'
import { corsHeaders } from '../_shared/cors.ts'

serve(async (req) => {
    // Handle CORS preflight
    if (req.method === 'OPTIONS') {
        return new Response('ok', { headers: corsHeaders })
    }

    try {
        const { document_id } = await req.json()

        if (!document_id) {
            return new Response(
                JSON.stringify({ error: 'Document ID is required' }),
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

        // Create client with user's JWT (RLS will ensure they can only see their own docs)
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

        // Get document (RLS will filter to user's documents only)
        const { data: document, error: docError } = await supabase
            .from('documents')
            .select('*')
            .eq('id', document_id)
            .single()

        if (docError || !document) {
            return new Response(
                JSON.stringify({ error: 'Document not found' }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 404 }
            )
        }

        // Generate a signed URL for the document (valid for 1 hour)
        const { data: signedUrl, error: urlError } = await supabase
            .storage
            .from('documents')
            .createSignedUrl(document.file_path, 3600) // 1 hour expiry

        if (urlError || !signedUrl) {
            return new Response(
                JSON.stringify({ error: 'Failed to generate download link' }),
                { headers: { ...corsHeaders, 'Content-Type': 'application/json' }, status: 500 }
            )
        }

        return new Response(
            JSON.stringify({
                url: signedUrl.signedUrl,
                document_name: document.document_name,
                document_type: document.document_type,
                mime_type: document.mime_type
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
