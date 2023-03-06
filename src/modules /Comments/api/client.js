import { createClient } from '@supabase/supabase-js'


const supabase = createClient(
    'https://rndmxpqliknuedxhcfrx.supabase.co',
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJuZG14cHFsaWtudWVkeGhjZnJ4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2NzU0MjkyNjEsImV4cCI6MTk5MTAwNTI2MX0.-3Q9W1Ewylbjfc6rDg4KEOkLyIFV8FnEF4sWpxLIzqU'
)

export default supabase