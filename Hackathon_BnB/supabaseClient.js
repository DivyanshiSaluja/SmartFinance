// supabaseClient.js
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://bkmbqnklxrpbhbzndmfo.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJrbWJxbmtseHJwYmhiem5kbWZvIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTEwNTM4MDIsImV4cCI6MjA2NjYyOTgwMn0.xcb-qFVztStg8laDy7OfnB3ra3nCgAPLucEQNIrvuc0';

export const supabase = createClient(supabaseUrl, supabaseKey);
