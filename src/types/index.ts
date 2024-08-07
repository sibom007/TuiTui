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
  firstName: string;
  lastName: string;
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
