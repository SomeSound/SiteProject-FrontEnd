import { ReactNode, createContext, useState } from 'react';
import { logInCustomer } from '../services/customer';
import { LoginDTO } from '../services/customer/types';
import { useCookies } from 'react-cookie';

interface AuthContextProps {
  signed: boolean;
  user: UserProps | null;
  signIn(data: LoginDTO): Promise<void>;
  signOut(): void;
  children: ReactNode;
}

interface UserProps {
  // id: number;
  // name: string;
  email: string;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

export const AuthProvider = ({ children }: any) => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [user, setUser] = useState<UserProps | null>(null);
  const [signed, setSigned] = useState<boolean>(false);

  async function signIn(data: LoginDTO) {
    console.log('lala2');
    const response = await logInCustomer(data);
    setCookie('token', response.data.token, {
      httpOnly: true,
    });
    setUser({
      email: response.data.email,
    });
    setSigned(true);
    console.log(cookies);
  }

  async function signOut() {
    removeCookie;
    setUser(null);
    setSigned(false);
  }

  return (
    <AuthContext.Provider value={{ signed, user, signIn, signOut, children }}>
      {children}
    </AuthContext.Provider>
  );
};
