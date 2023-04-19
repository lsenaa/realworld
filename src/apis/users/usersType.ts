export interface IPostLogin {
  email: string;
  password: string;
}

export interface IPostRegister {
  username: string;
  email: string;
  password: string;
}

export interface IPutUser {
  email: string;
  username: string;
  bio: string;
  image: string;
  password: string;
}
