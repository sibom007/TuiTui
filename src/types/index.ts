import "next-auth";

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

enum Gender {
  MAIE = "MAIE",
  FEMAIE = "FEMAIE",
}

enum Matching {
  MAIE = "MAIE",
  FEMAIE = "FEMAIE",
}

export interface IUser {
  id: string;
  name?: string | null;
  email?: string | null;
  hashPassword?: string | null;
  number?: string | null;
  emailVerified?: Date | null;
  profile?: Profile | null;
}

interface Profile {
  id: string;
  userId: string;
  bio?: string | null;
  backgroundcolour?: string | null;
  image?: string | null;
  age?: number | null;
  address?: string | null;
  gender?: Gender | null;
  Lookingfor?: Matching | null;
  country?: string | null;
  YouLike: string[];
  LikedBy: string[];
  Match: string[];
  user: IUser;
}



