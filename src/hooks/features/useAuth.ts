import { forgotPassword, logout, register, resendVerify, resetPassword } from '@/api/auth';

import useAppMutation, { AppMutationOptions } from '../useAppMutation';

export const useResendVerifyMutate = (options?: AppMutationOptions) =>
  useAppMutation(
    resendVerify,
    {
      useAppMutationProps: options,
    },
    { toast: false }
  );

export const useRegisterMutate = (options?: AppMutationOptions) =>
  useAppMutation(
    register,
    {
      useAppMutationProps: options,
    },
    { toast: false }
  );

export const useForgotPasswordMutate = (options?: AppMutationOptions) =>
  useAppMutation(
    forgotPassword,
    {
      useAppMutationProps: options,
    },
    { toast: false }
  );

export const useResetPasswordMutate = (options?: AppMutationOptions) =>
  useAppMutation(resetPassword, {
    useAppMutationProps: options,
  });

export const useLogout = (options?: AppMutationOptions) =>
  useAppMutation(logout, {
    useAppMutationProps: options,
  });
