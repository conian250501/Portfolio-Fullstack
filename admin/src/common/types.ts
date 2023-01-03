import { Theme } from "@mui/material";

// Auth
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

// User
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

// PROFILE
export interface ProfileUserTypes {
  _id: string | number;
  email: string;
  userName: string;
  nickName: string;
  avatar: string;
  phone: string;
  title: string;
  description: string;
  introduce: string;
  isAdmin: boolean;
  projects: ProjectTypes[];
  // skills: SkillTypes[]
  // contacts: ContactTypes[]
  createdAt: string;
  updatedAt: string;
}

export interface ProfileUpdateTypes {
  userName: string;
  nickName: string;
  avatar: string;
  phone: string;
  title: string;
  description: string;
  introduce: string;
  isAdmin: boolean;
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
  type: any;
  links: LinkTypes[];
  technologicals: string[];
  createdAt: string;
  updatedAt: string;
}

export interface TypeOfProject {
  _id: string | number;
  name: string;
  createdAt: string;
  updatedAt: string;
}

export interface PayloadUpdateProject {
  id: string | number;
  data: {
    image: string;
    name: string;
    description: string;
    type: any;
  };
}
