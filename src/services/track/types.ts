import { ArtistDTO } from '../artist/types';

export type TrackDTO = {
  name: string;
  duration: string;
  image: string;
  genre: string;
  artist: ArtistDTO;
  path: string;
};
