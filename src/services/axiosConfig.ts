import axios from 'axios';
import {
  InternalServerErrorException,
  NetworkException,
  NotFoundException,
  ConflictException,
} from '../exceptions';
import { translateMessage } from '../utils/errorMessages';
import { useCookies } from 'react-cookie';

function getCookie() {
  const [cookies] = useCookies(['token', 'user']);
  console.log(cookies.user);
  console.log(cookies.token);
  return cookies.token;
}

const api = axios.create({
  baseURL: 'http://44.213.164.140:8080', //TODO ENVs
  // withCredentials: true,
  headers: {
    'Content-Type': 'application/json',
    // Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJIeXBlciIsInN1YiI6InRlc3RlIiwiZXhwIjoxNzEyNjQ3MDM3fQ.-udfnP2u-N5p1X_vjsxlroaoVBd1sXNtM3o3tuovqKc`,
  },
});

api.interceptors.response.use(
  (response) => {
    return Promise.resolve(response);
  },
  (error) => {
    if (error.response) {
      switch (error.response.status) {
        case 404:
          return Promise.reject(new NotFoundException(null, error.response));
        case 409:
          const errorMessage = error.response?.data?.details?.[0];
          const translatedMessage = translateMessage(errorMessage);
          return Promise.reject(
            new ConflictException(translatedMessage, error.response),
          );
        case 500:
          return Promise.reject(
            new InternalServerErrorException(null, error.response),
          );
        default:
          return Promise.reject(new NetworkException(null, error.response));
      }
    } else {
      return Promise.reject(new NetworkException(null, error.response));
    }
  },
);

export default api;
