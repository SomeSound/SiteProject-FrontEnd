import { ReactNode, createContext, useEffect, useState } from 'react';
import { getCustomerByEmail, logInCustomer } from '../services/customer';
import { CustomerDTO, LoginDTO } from '../services/customer/types';
import { Cookies, useCookies } from 'react-cookie';

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
  const [cookies, setCookie, removeCookie] = useCookies([
    'token',
    'user',
    'artist',
  ]);
  const [user, setUser] = useState<CustomerDTO | null>(null);
  const [signed, setSigned] = useState<boolean>(false);

  async function signIn(data: LoginDTO) {
    const response = await logInCustomer(data);

    console.log(response.data.token.token);

    setCookie('token', response.data.token.token, {
      maxAge: 60 * 60 * 1, // 1 hour
      // httpOnly: true,
      path: '/',
    });

    const customer = await getCustomerByEmail(data.email);
    console.log(customer);
    setUser(customer.data);

    // setCookie('user', customer.data.email, {
    //   maxAge: 60 * 60 * 1,
    //   httpOnly: false,
    //   // path: '/',
    // });
    setSigned(true);
  }

  async function signOut() {
    removeCookie('token');
    removeCookie('user');
    setUser(null);
    setSigned(false);
  }

  useEffect(() => {
    console.log(cookies.user);
    if (cookies.user) {
      setSigned(true);
    }
  }, []);

  return (
    <AuthContext.Provider value={{ signed, user, signIn, signOut, children }}>
      {children}
    </AuthContext.Provider>
  );
};
