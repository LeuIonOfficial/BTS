export type LoginData = {
  email?: string;
  password?: string;
  refreshToken?: string;
};

export type LoginResult = {
  success: boolean;
  accessToken?: string;
  error?: string;
};
