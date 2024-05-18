import { AxiosPromise } from 'axios';
import api from '../axiosConfig';
import { parseCookies } from 'nookies';

const { token } = parseCookies();

export function useService() {
  function get(url: string, data: any, query: string): AxiosPromise {
    return api.get(`${url}${query}`, {
      data,
    });
  }

  function post(url: string, data: any): AxiosPromise {
    const header = url.includes('/track?artistId')
      ? 'multipart/form-data'
      : 'application/json';
    console.log(header);
    return api.post(`${url}`, data, {
      headers: { 'Content-Type': header },
    });
  }

  function put(url: string, data: any): AxiosPromise {
    return api.put(`${url}`, data, {
      headers: {},
    });
  }

  function patch(url: string, data: any): AxiosPromise {
    return api.patch(`${url}`, data, {
      headers: {},
    });
  }

  function remove(url: string, data: any) {
    return api.delete(`${url}`, {
      headers: {},
      ...data,
    });
  }

  return {
    get,
    post,
    patch,
    put,
    remove,
  };
}
