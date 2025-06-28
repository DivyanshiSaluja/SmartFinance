// auth.js
import { supabase } from './supabaseClient.js';

// Sign up function
export async function signUp(email, password, name) {
  const { data, error } = await supabase.auth.signUp({
    email,
    password,
    options: {
      data: { full_name: name }
    }
  });
  return { data, error };
}

// Login function
export async function signIn(email, password) {
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (!error && data?.session?.access_token) {
    localStorage.setItem('accessToken', data.session.access_token);
  }
  return { data, error };
}

// Logout function
export async function signOut() {
  await supabase.auth.signOut();
  localStorage.removeItem('accessToken');
}

// Get current user
export async function getCurrentUser() {
  const { data: { user } } = await supabase.auth.getUser();
  return user;
}

// Get session token
export async function getSessionToken() {
  const { data: { session } } = await supabase.auth.getSession();
  return session?.access_token;
}

// API call with token
export async function apiRequest(url, method = 'GET', body = null) {
  const token = await getSessionToken();
  if (!token) throw new Error('Not authenticated');
  const response = await fetch(url, {
    method,
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`
    },
    body: body ? JSON.stringify(body) : null
  });
  if (!response.ok) throw new Error('API request failed');
  return response.json();
}
