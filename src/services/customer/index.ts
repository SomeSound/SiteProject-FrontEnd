import { AxiosPromise } from 'axios';
import { useService } from '../hook/useService';
import { CustomerDTO, LoginDTO } from './types';

export const createCustomer = (
  data: CustomerDTO,
): AxiosPromise<CustomerDTO> => {
  const { post } = useService();

  return post(`/customer`, data);
};

export const logInCustomer = (login: LoginDTO): AxiosPromise<LoginDTO> => {
  const { post } = useService();

  return post(`/customer/login`, login);
};
