import { createClient } from "@supabase/supabase-js"

const supabaseUrl = "https://rafkiszzabrbzmlneexp.supabase.co"
const supabaseKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhZmtpc3p6YWJyYnptbG5lZXhwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEyMzQyMTIsImV4cCI6MjA2NjgxMDIxMn0.u_hJvfCtFd250BP2cpAAYakui5AdmAD2iMZiMj_s4Fw"

export const supabase = createClient(supabaseUrl, supabaseKey)
