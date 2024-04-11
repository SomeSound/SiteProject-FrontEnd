import { ReactNode, createContext, useEffect, useState } from 'react';
import { getCustomerByEmail, logInCustomer } from '../services/customer';
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
    const response = await logInCustomer(data);

    console.log(response.data.token.token);

    setCookie(null, 'token', response.data.token.token, {
      path: '/',
      maxAge: 60 * 60 * 1, // 1 hour
    });

    const customer = await getCustomerByEmail(data.email);
    setUser(customer.data);

    setCookie(null, 'user', customer.data.email);
    setSigned(true);
  }

  async function signOut() {
    setCookie(null, 'token', null);
    setCookie(null, 'user', null);
    setUser(null);
    setSigned(false);
  }

  useEffect(() => {
    const { token } = parseCookies();
    if (token) {
      setSigned(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signed, user, signIn, signOut, children }}>
      {children}
    </AuthContext.Provider>
  );
};
