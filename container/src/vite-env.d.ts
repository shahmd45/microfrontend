/* eslint-disable @typescript-eslint/no-explicit-any */

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

declare module 'login/LoginApp' {
  import { ComponentType } from 'react';
  const App: ComponentType<any>;
  export default App;
}


declare module 'product/ProductApp' {
  import { ComponentType } from 'react';
  const App: ComponentType<any>;
  export default App;
}

declare module 'cart/CartApp' {
  import { ComponentType } from 'react';
  const App: ComponentType<any>;
  export default App;
}

declare module 'checkout/CheckoutApp' {
  import { ComponentType } from 'react';
  const App: ComponentType<any>;
  export default App;
}

declare module 'checkout/PaymentApp' {
  import { ComponentType } from 'react';
  const App: ComponentType<any>;
  export default App;
}