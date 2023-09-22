export type GetUserType = {
  id: number;
  name: string;
  role: string;
  email: string;
  is_deactivated: number;
  phone: string;
};

export type PostUserType = {
  id: number;
  name: string;
  role: string;
  email: string;
  is_deactivated: number;
  phone: string;
};

export type PostUsersParamsType = {
  page: number;
  per_page: number;
};
