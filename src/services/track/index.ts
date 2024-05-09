import { AxiosPromise } from 'axios';
import { useService } from '../hook/useService';
import { TrackDTO, TrackPageDTO } from './types';

export const getAllTracks = (): AxiosPromise<TrackPageDTO> => {
  const { get } = useService();

  return get(`/track`, '', '');
};

export const saveTracks = (
  artistId: number,
  data: any,
): AxiosPromise<TrackDTO> => {
  const { post } = useService();

  return post(`/track?artistId=${artistId}`, data);
};

export const getFileTrackById = (id: number): AxiosPromise<TrackDTO> => {
  const { get } = useService();

  return get(`/track/${id}/url`, '', '');
};

export const getTrackById = (id: number): AxiosPromise<TrackDTO> => {
  const { get } = useService();

  return get(`/track/${id}`, '', '');
};
