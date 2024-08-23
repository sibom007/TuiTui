import "next-auth";


export type User = {
  id: string;
  firstname: string;
  lastName: string;
  email: string;
  password: string;
  Like: string[];
  createdAt: Date;
  updatedAt: Date;
};

export type variant = "LOGIN" | "REGISTER";

export interface loginprops {
  name: string;
  email: string;
  password: string;
  image: string;
  age: string;
}

declare module "next-auth" {
  interface Session {
    user: {
      _id: string;
      email: string;
    };
  }
}

export type IMeta = {
  page: number;
  limit: number;
  total: number;
};

export type ResponseSuccessType = {
  data: any;
  meta?: IMeta;
  status: number | string;
};

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};

export type IGenericErrorMessage = {
  path: string | number;
  message: string;
};

export type TUser = {
  id: string;
  name: string;
  photo: string;
  email: string;
  role: string;
};

export const Gender = ["MALE", "FEMALE"];

