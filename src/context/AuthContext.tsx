import { ReactNode, createContext, useEffect, useState } from 'react';
import {
  getCustomerByEmail,
  logInCustomer,
  refreshToken,
} from '../services/customer';
import { CustomerDTO, LoginDTO } from '../services/customer/types';
import { parseCookies, setCookie } from 'nookies';

interface AuthContextProps {
  signed: boolean;
  user: CustomerDTO | null;
  signIn(data: LoginDTO): Promise<void>;
  signOut(): void;
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<CustomerDTO | null>(null);
  const [signed, setSigned] = useState<boolean>(false);

  async function signIn(data: LoginDTO) {
    try {
      const response = await logInCustomer(data);

      setCookie(null, 'token', response.data.token.token, {
        path: '/',
      });

      setUser(response.data.customer);

      setCookie(null, 'user', response.data.customer.email);
      setSigned(true);
    } catch (error) {
      console.error('Error logIn: ', error);
    }
  }

  async function updateToken() {
    try {
      const response = await refreshToken();
      setCookie(null, 'token', response.data.token, {
        path: '/',
      });
    } catch (error) {
      console.error('Error refreshing token:', error);
      signOut();
    }
  }

  async function signOut() {
    setCookie(null, 'token', 'null');
    setCookie(null, 'user', 'null');
    setUser(null);
    setSigned(false);
  }

  useEffect(() => {
    const { token } = parseCookies();
    if (token !== 'null') {
      setSigned(true);
      updateToken();
    } else {
      signOut();
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signed, user, signIn, signOut, children }}>
      {children}
    </AuthContext.Provider>
  );
};
