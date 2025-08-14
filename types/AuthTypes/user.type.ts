export interface IUserRegisterRequest {
  username: string;
  email: string;
  password: string;
}

export interface IUserRegisterResponse {
  token: string;
  username: string;
  email: string;
  imageUrl?: string;
}
