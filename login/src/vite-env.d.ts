 
/// <reference types="vite/client" />

declare module 'shared/store' {
  export type AuthState = {
    user: string | null
    token: string | null
    login: (user: unknown, token: string | null) => void
    logout: () => void
  }

  // Zustand hook type (supports selector)
  export const useAuthStore: <T>(
    selector: (state: AuthState) => T
  ) => T

  export const getAuth: () => AuthState
}
