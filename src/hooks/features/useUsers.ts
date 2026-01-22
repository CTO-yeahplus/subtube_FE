import { changePassword, getDetailUser, getUsers, updateUserInfo } from '@/api/users';
import { GetUsersRequest } from '@/interfaces/users';

import useAppMutation from '../useAppMutation';
import useAppQuery from '../useAppQuery';

export const useGetDetailUserQuery = (enabled?: boolean) =>
  useAppQuery({
    queryKey: ['userDetail'],
    queryFn: () => getDetailUser(),
    gcTime: 0,
    enabled: enabled ?? true,
  });

export const useGetUsers = (params: GetUsersRequest) =>
  useAppQuery({
    queryKey: ['users', params],
    queryFn: () => getUsers(params),
  });

export const useGetUsersForCSV = (params: GetUsersRequest) =>
  useAppQuery({
    queryKey: ['usersCSV', params],
    queryFn: () => getUsers(params),
    enabled: !!params.pageSize,
  });

export const useChangePassword = () => {
  return useAppMutation(changePassword, undefined, {
    toast: false,
  });
};

export const useUpdateUserInfo = () => {
  return useAppMutation(updateUserInfo, undefined, {
    toast: false,
  });
};
