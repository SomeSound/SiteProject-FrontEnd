import { AxiosPromise } from 'axios';
import { useService } from '../hook/useService';
import { TrackDTO } from './types';

export const getAllTracks = (): AxiosPromise<any> => {
  const { get } = useService();

  return get(`/track`, '', '');
};
