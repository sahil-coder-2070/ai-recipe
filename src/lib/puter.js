import { create } from "zustand";

export const usePuterStore = create((set, get) => {
  const getPuter = () =>
    typeof window !== "undefined" && window.puter ? window.puter : null;

  const setError = (msg) => {
    set({
      error: msg,
      isLoading: false,
      auth: {
        ...get().auth,
        user: null,
        isAuthenticated: false,
      },
    });
    return false;
  };

  const checkAuthStatus = async () => {
    const puter = getPuter();
    if (!puter) {
      setError("Puter.js not available");
      return false;
    }

    set({ isLoading: true, error: null });

    try {
      const isSignedIn = await puter.auth.isSignedIn();

      if (isSignedIn) {
        const user = await puter.auth.getUser();
        set({
          auth: {
            ...get().auth,
            user,
            isAuthenticated: true,
          },
          isLoading: false,
        });
        return true;
      } else {
        set({
          auth: {
            ...get().auth,
            user: null,
            isAuthenticated: false,
          },
          isLoading: false,
        });
        return false;
      }
    } catch (err) {
      setError(err.message || "Failed to check auth status");
      return false;
    }
  };

  const signIn = async () => {
    const puter = getPuter();
    if (!puter) return setError("Puter.js not available");

    set({ isLoading: true, error: null });

    try {
      await puter.auth.signIn();
      return await checkAuthStatus();
    } catch (err) {
      return setError(err.message || "Sign in failed");
    }
  };

  const signOut = async () => {
    const puter = getPuter();
    if (!puter) return setError("Puter.js not available");

    set({ isLoading: true, error: null });

    try {
      await puter.auth.signOut();
      set({
        auth: {
          ...get().auth,
          user: null,
          isAuthenticated: false,
        },
        isLoading: false,
      });
      return true;
    } catch (err) {
      return setError(err.message || "Sign out failed");
    }
  };

  return {
    isLoading: true,
    error: null,
    auth: {
      user: null,
      isAuthenticated: false,
      getUser: () => get().auth.user,
    },
    checkAuthStatus,
    signIn,
    signOut,
  };
});