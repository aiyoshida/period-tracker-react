import {createClient} from '@supabase/supabase-js'
const SUPABASE_URL = 'https://eclhrmavoupdhxonvjqo.supabase.co'
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVjbGhybWF2b3VwZGh4b252anFvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzgxNTQ0NTcsImV4cCI6MjA1MzczMDQ1N30.yn7d7WeWJbbxmpctBzNmH9z4_DguHFDnVBCcYBNQ4Z8'

export const supabase = createClient (SUPABASE_URL, SUPABASE_KEY);