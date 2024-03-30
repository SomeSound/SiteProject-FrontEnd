import { AxiosPromise } from 'axios';
import { useService } from '../hook/useService';
import { CustomerDTO } from './types';

export const createCustomer = (
  customerData: CustomerDTO,
): AxiosPromise<CustomerDTO> => {
  const { post } = useService();

  return post(`/customer/register`, customerData);
};
