import { ArtistDTO } from '../artist/types';

export type TrackPageDTO = {
  last: boolean;
  first: boolean;
  totalElements: number;
  totalPages: number;
  size: number;
  numberOfElements: number;
  page: number;
  tracks: TrackDTO[];
};

export type TrackDTO = {
  id: number;
  name: string;
  duration: string;
  image: string;
  genre: string;
  artist: ArtistDTO;
  path: string;
  file?: File;
};
