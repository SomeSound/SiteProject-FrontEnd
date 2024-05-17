import { ReactNode, createContext, useEffect, useState } from 'react';
import {
  getCustomerByEmail,
  logInCustomer,
  refreshToken,
} from '../services/customer';
import { CustomerDTO, LoginDTO } from '../services/customer/types';
import { parseCookies, setCookie } from 'nookies';
import { ArtistDTO } from '../services/artist/types';
import { Navigate } from 'react-router-dom';

interface AuthContextProps {
  userSigned: boolean;
  artistSigned: boolean;
  artist: ArtistDTO | null;
  user: CustomerDTO | null;
  artists: ArtistDTO[] | null;
  signIn(data: LoginDTO): Promise<void>;
  selectArtist(data: number): Promise<void>;
  updateUserInfo(data: string): Promise<void>;
  signOut(): void;
  children: ReactNode;
}

export const AuthContext = createContext<AuthContextProps>(
  {} as AuthContextProps,
);

export const AuthProvider = ({ children }: any) => {
  const [user, setUser] = useState<CustomerDTO | null>(null);
  const [artist, setArtist] = useState<ArtistDTO>(null);
  const [userSigned, setUserSigned] = useState<boolean>(false);
  const [artistSigned, setArtistSigned] = useState<boolean>(false);
  const [artists, setArtists] = useState<ArtistDTO[] | null>(null);

  async function signIn(data: LoginDTO) {
    try {
      const response = await logInCustomer(data);

      if (response.data.customer.artistProfiles.length > 0) {
        setArtistSigned(true);
        setArtists(response.data.customer.artistProfiles);
        setArtist(response.data.customer.artistProfiles[0]);
        setCookie(
          null,
          'artist',
          response.data.customer.artistProfiles[0].username,
          {
            path: '/',
          },
        );
      }

      setUserSigned(true);
      setUser(response.data.customer);

      setCookie(null, 'token', response.data.token.token, {
        path: '/',
      });

      setCookie(null, 'user', response.data.customer.email, {
        path: '/',
      });
    } catch (error) {
      console.error('Error logIn: ', error);
    }
  }

  async function updateUserInfo(email: string) {
    try {
      const response = await getCustomerByEmail(email);

      if (response.data.artistProfiles.length > 0) {
        setArtistSigned(true);
        setArtists(response.data.artistProfiles);
        setArtist(response.data.artistProfiles[0]);
        setCookie(null, 'artist', response.data.artistProfiles[0].username, {
          path: '/',
        });
      }

      setUserSigned(true);
      setUser(response.data);
    } catch (error) {
      console.error('Error logIn: ', error);
    }
  }

  async function selectArtist(id: number) {
    try {
      const artist = artists.filter((item: ArtistDTO) => {
        return item.id === id;
      });

      setArtist(artist[0]);

      setCookie(null, 'artist', artist[0].username, {
        path: '/',
      });
      setUserSigned(true);
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
    setCookie(null, 'artist', 'null');
    setUser(null);
    setArtists(null);
    setArtist(null);
    setArtistSigned(false);
    setUserSigned(false);
  }

  useEffect(() => {
    const { token, user } = parseCookies();
    if (token !== 'null' && user !== 'null') {
      updateUserInfo(user);
      updateToken();
    } else {
      signOut();
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{
        userSigned: userSigned,
        artistSigned: artistSigned,
        artist: artist,
        user,
        artists,
        signIn,
        selectArtist,
        updateUserInfo,
        signOut,
        children,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
