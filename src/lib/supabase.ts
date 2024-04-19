import { createClient } from '@supabase/supabase-js'
export const supabaseClient = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL!!, process.env.NEXT_PUBLIC_SUPABASE_PUBLIC_KEY!!);

export const supabaseUploadFile = async (file: File | string,bucket:'company' | 'applicant') => {
    const { data, error } = await supabaseClient.storage.from(bucket).upload(file.name, file);
}