export interface User {
  id: number;
  email: string;
  type: string;
  first_name: string;
  last_name: string;
  phone: string;
  phone_code: string;
  payments: [];
  youtubeAccounts: YoutubeAccount[];
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
  level?: string;
  payer_id: string;
  payment_before_deadline: boolean;
  expire_date: string;
  start_date: string;
  payment_date: string;
  changeRank: ChangeRankData | null;
  renew_plan: boolean;
}

export type ChangeRankData = {
  change_rank?: string | null;
  current_rank: string;
  keep_yt_account_id: string[];
  user_id: string;
};

export type YoutubeAccount = {
  id: number;
  name_channel: string;
  name: string;
};

export interface UserModel {
  id: number;
  firstName: string;
  lastName: string;
  imgUrl: string;
  userName: string;
  email: {
    name: string;
    verified: boolean;
  };
  phone: {
    number: string;
    verified: boolean;
  };
  sex: 'male' | 'female';
  birthday: string;
  lang: 'en' | 'de';
  country: string;
  city: string;
  address1: string;
  address2?: string;
  zipcode: number;
  website?: string;
  socials?: {
    twitter?: string;
    facebook?: string;
    linkedin?: string;
  };
}

export interface LoginRequest {
  email_or_phone: string;
  phone_code: string;
  password: string;
}

export interface LoginResponse {
  email_or_phone: string;
  access_token: string;
  refresh_token: string;
}

export interface RegisterRequest {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  phone: string;
  phone_code: string;
}

export interface RegisterResponse {
  id: number;
  email: string;
  first_name: string;
  last_name: string;
  phone: string;
}

export interface ForgotPassword {
  email: string;
  method: string;
}

export interface VerifyForgotPasswordSms {
  phone: string;
  phone_code: string;
}

export interface ResetPassword {
  code: string;
  password: string;
  phone: string;
  phone_code: string;
  method: string;
}

export interface VerifyUser {
  email_or_phone: string;
  phone_code: string;
}

export interface UserDetailResponse {
  id?: number;
  email?: string;
  phone?: string;
  first_name?: string;
  last_name?: string;
  level?: string;
  phone_code: string;
  createdAt?: string;
  updatedAt?: string;
  deletedAt?: string;
  expire_date: string;
  start_date: string;
  payment_date: string;
  changeRank: ChangeRankData | null;
  renew_plan: boolean;
}
