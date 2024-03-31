export type CustomerDTO = {
  name: string;
  email: string;
  password: string;
  country: string;
  birthDate: string;
  subscription: number;
  avatar: string;
  role: string;
};

export type LoginDTO = {
  email: string;
  password: string;
  token: string;
};
