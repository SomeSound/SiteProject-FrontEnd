import { AxiosPromise } from 'axios';
import { useService } from '../hook/useService';
import { ArtistDTO, ArtistPageDTO } from './types';

export const createArtist = (data: ArtistDTO): AxiosPromise<ArtistDTO> => {
  const { post } = useService();

  return post(`/artist`, data);
};

export const getArtists = (): AxiosPromise<ArtistPageDTO> => {
  const { get } = useService();

  return get(`/artist`, '', '');
};
