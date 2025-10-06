import { createClient } from "@supabase/supabase-js"

// const supabaseUrl: string = import.meta.env.VITE_SUPABASE_URL
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || "https://bpvymygwansrrfqcvckt.supabase.co"
// const supabaseUrl = import.meta.env.VITE_SUPABASE_URL
// const supabaseKey: string = import.meta.env.VITE_SUPABASE_ANON_KEY
// const supabaseKey = import.meta.env.VITE_SUPABASE_KEY || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJwdnlteWd3YW5zcnJmcWN2Y2t0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTMyNjIwNDQsImV4cCI6MjA2ODgzODA0NH0.m0hme9l3Tm7AckBBqBPRWPIDWMk7nA5iM8HCu-S4OuU"
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY;
console.log("Supabase URL:", import.meta.env.VITE_SUPABASE_URL);
if (!supabaseUrl) throw new Error("Missing VITE_SUPABASE_URL")
if (!supabaseKey) throw new Error("Missing VITE_SUPABASE_ANON_KEY")

const supabase = createClient(supabaseUrl, supabaseKey)


export default supabase