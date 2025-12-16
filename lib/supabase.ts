import { createClient as createSupabaseClient } from '@supabase/supabase-js'

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
const supabaseServiceKey = process.env.SUPABASE_SERVICE_ROLE_KEY

// Default client for client-side usage
export const supabase = createSupabaseClient(supabaseUrl, supabaseAnonKey)

// Factory function for creating clients (works in both client and server)
export function createClient() {
  return createSupabaseClient(supabaseUrl, supabaseAnonKey)
}

// Server-side admin client that bypasses RLS (use with caution!)
export function createAdminClient() {
  if (!supabaseServiceKey) {
    throw new Error('SUPABASE_SERVICE_ROLE_KEY is not set')
  }
  return createSupabaseClient(supabaseUrl, supabaseServiceKey, {
    auth: {
      autoRefreshToken: false,
      persistSession: false
    }
  })
}
