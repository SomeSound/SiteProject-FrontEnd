import { AxiosPromise } from 'axios';
import { useService } from '../hook/useService';
import { ArtistDTO } from './types';

export const createArtist = (data: ArtistDTO): AxiosPromise<ArtistDTO> => {
  const { post } = useService();

  return post(`/artist`, data);
};

export const getArtists = (): AxiosPromise<ArtistDTO> => {
  const { get } = useService();

  return get(`/artist`, '', '');
};
