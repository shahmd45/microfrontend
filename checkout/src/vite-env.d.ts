 
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

declare module 'payment/PaymentPage' {
  import { ComponentType } from 'react';
  export interface PaymentPageProps {
    refId: string;
    user?: string | null;
  }
  const PaymentPage: ComponentType<PaymentPageProps>;
  export default PaymentPage;
}