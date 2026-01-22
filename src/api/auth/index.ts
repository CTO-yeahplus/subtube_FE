import { request } from '@/api/request';
import {
  ForgotPassword,
  LoginRequest,
  LoginResponse,
  RegisterRequest,
  RegisterResponse,
  ResetPassword,
  ResponseData,
  VerifyForgotPasswordSms,
  VerifyUser,
} from '@/interfaces';

export const login = (body: LoginRequest) =>
  request.post<LoginRequest, ResponseData<LoginResponse>>('/auth/sign-in', body);

export const resendVerify = (body: VerifyUser) =>
  request.post<VerifyUser, ResponseData<{ success: boolean }>>('/auth/resend-email-verify', body);

export const register = (body: RegisterRequest) =>
  request.post<RegisterRequest, ResponseData<RegisterResponse>>('/auth/sign-up', body);

export const forgotPassword = (body: ForgotPassword) =>
  request.post<ForgotPassword, ResponseData<{ success: boolean }>>('/auth/forgot-password', body);

export const verifyForgotPasswordSms = (params: VerifyForgotPasswordSms) =>
  request.get<VerifyForgotPasswordSms, ResponseData<{ success: boolean }>>(
    '/auth/verify-forgot-password-sms',
    params
  );

export const resetPassword = (body: ResetPassword) =>
  request.post<ResetPassword, ResponseData<{ success: boolean }>>('/auth/reset-password', body);

export const logout = (id: number) =>
  request.delete<null, ResponseData<{ success: boolean }>>(`/auth/sign-out/${id}`);
