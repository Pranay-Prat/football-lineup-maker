import { createClient } from "@/lib/supabase/server";
import { createClient as createBrowserClient } from "@/lib/supabase/client";


// ─── Server-side helpers ───────────────────────────────────────────

/**
 * Get the current session (server-side).
 * Use in Server Components, Route Handlers, Server Actions.
 */
export async function getSession() {
  const supabase = await createClient();
  const {
    data: { session },
    error,
  } = await supabase.auth.getSession();
  if (error) {
    console.error("Error getting session:", error.message);
    return null;
  }
  return session;
}

/**
 * Get the current authenticated user (server-side).
 * This calls getUser() which validates the JWT with Supabase,
 * making it more secure than getSession() alone.
 */
export async function getUser() {
  const supabase = await createClient();
  const {
    data: { user },
    error,
  } = await supabase.auth.getUser();
  if (error) {
    console.error("Error getting user:", error.message);
    return null;
  }
  return user;
}

/**
 * Require authentication (server-side).
 * Returns the user or throws a redirect to the home page.
 */
export async function requireAuth() {
  const user = await getUser();
  if (!user) {
    throw new Error("Authentication required");
  }
  return user;
}

// ─── Client-side helpers ───────────────────────────────────────────



/**
 * Sign in with email and password.
 */
export function signInWithEmail(email: string, password: string) {
  const supabase = createBrowserClient();
  return supabase.auth.signInWithPassword({
    email,
    password,
  });
}

/**
 * Sign up with email and password.
 */
export function signUp(email: string, password: string) {
  const supabase = createBrowserClient();
  return supabase.auth.signUp({
    email,
    password,
    options: {
      emailRedirectTo: `${window.location.origin}/auth/callback`,
    },
  });
}

/**
 * Sign out the current user.
 */
export async function signOut() {
  const supabase = createBrowserClient();
  const { error } = await supabase.auth.signOut();
  if (error) {
    console.error("Error signing out:", error.message);
    throw error;
  }
}
