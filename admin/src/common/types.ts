import { Theme } from "@mui/material";

export interface RegisterTypes {
  email: string;
  userName: string;
  password: string;
  confirmPassword: string;
}
export interface LoginTypes {
  email: string;
  password: string;
}

export interface UserTypes {
  id: string;
  avatar: string;
  email: string;
  userName: string;
  nickName: string;
  phone: string;
  title: string;
  description: string;
  introduce: string;
  isAdmin: boolean;
  verify: boolean;
  token: string;
  message: string;
}

// PROJECT TYPES
export interface LinkTypes {
  label: string;
  url: string;
}
export interface ProjectTypes {
  _id: string | number;
  image: string;
  name: string;
  description: string;
  type: string | number;
  link: LinkTypes[];
  technologies: string[];
  createdAt: string;
  updatedAt: string;
}
export interface TypeOfProject {
  _id: string | number;
  name: string;
  createdAt: string;
  updatedAt: string;
}
