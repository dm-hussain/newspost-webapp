import { createClient } from "@supabase/supabase-js";

// Supabase credentials
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

// Ensure the client is created only once
const supabase = createClient(supabaseUrl, supabaseAnonKey);

export default supabase;
