// Store for Google auth using zustand

import create from "zustand";

export const useAuthStore = create((set) => ({
  isSignedIn: null,
  userId: null,
  signIn: (newUserId) => set({ isSignedIn: true, userId: newUserId }),
  signOut: () => set({ isSignedIn: false, userId: 0 }),
}));

// wrapper for class based modules

export const withAuthStore = (BaseComponent) => (props) => {
  const store = useAuthStore();
  return <BaseComponent {...props} store={store} />;
};
