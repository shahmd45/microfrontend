import { create } from 'zustand'

type AuthState = {
    user: unknown | null
    token: string | null
    login: (user: unknown, token: string | null) => void
    logout: () => void
}

export const useAuthStore = create<AuthState>((set) => ({
    user: null,
    token: null,
    login: (user, token) => set({ user, token }),
    logout: () => set({ user: null, token: null }),
}))

export const getAuth = () => {
    let snapshot;
    useAuthStore.subscribe((state) => { snapshot = state })()
    return snapshot;
}
