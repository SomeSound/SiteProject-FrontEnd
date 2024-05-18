import { TrackPageDTO } from '../track/types';

export type ArtistPageDTO = {
  last: boolean;
  first: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  numberOfElements: number;
  page: number;
  artists: ArtistDTO[];
};

export type ArtistDTO = {
  id: number;
  username: string;
  credits: number;
  email?: string;
  carts?: [];
};
