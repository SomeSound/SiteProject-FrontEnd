import { ReactNode, createContext, useEffect, useState } from 'react';
import { logInCustomer } from '../services/customer';
import { LoginDTO } from '../services/customer/types';
import { Cookies, useCookies } from 'react-cookie';

interface AuthContextProps {
  signed: boolean;
  user: UserProps | null;
  signIn(data: LoginDTO): Promise<void>;
  signOut(): void;
  children: ReactNode;
}

interface UserProps {
  id: number;
  name: string;
  email: string;
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
  const [user, setUser] = useState<UserProps | null>(null);
  const [signed, setSigned] = useState<boolean>(false);

  async function signIn(data: LoginDTO) {
    const response = await logInCustomer(data);

    setCookie('token', response.data.token, {
      httpOnly: true,
      path: '/',
    });

    setUser({
      id: 1,
      name: 'User',
      email: 'User@icloud.com', //response.data.email,
    });

    setCookie('user', response.data.token, {
      httpOnly: false,
      path: '/',
    });

    setSigned(true);
  }

  async function signOut() {
    removeCookie('token');
    removeCookie('user');
    setUser(null);
    setSigned(false);
  }

  useEffect(() => {
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
