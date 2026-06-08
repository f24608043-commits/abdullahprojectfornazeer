<<<<<<< HEAD
// src/lib/supabase.ts
=======
>>>>>>> 7521fbb67a98c37ad8e36ff17587932e08c1893b
import { createClient } from '@supabase/supabase-js'

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY

<<<<<<< HEAD
if (!supabaseUrl || !supabaseAnonKey) {
    throw new Error('Missing Supabase environment variables')
}

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
=======
export const supabase = createClient(
    supabaseUrl,
    supabaseAnonKey
)
>>>>>>> 7521fbb67a98c37ad8e36ff17587932e08c1893b
