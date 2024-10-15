import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://vrgrzqmgolnyatavgilv.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InZyZ3J6cW1nb2xueWF0YXZnaWx2Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjgxNDYzMjAsImV4cCI6MjA0MzcyMjMyMH0.9C1eglKt4nbUNvzckNLy6nzC4Qq_WwWRqxK0pEKvdNE";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
