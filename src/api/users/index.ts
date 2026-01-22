import { request } from '@/api/request';
import {
  GetUsersRequest,
  GetUsersResponse,
  IChangePassword,
  IUserInfoUpdate,
  ResponseData,
  UserDetailResponse,
} from '@/interfaces';

export const getUsers = (params: GetUsersRequest) =>
  request.get<GetUsersRequest, ResponseData<GetUsersResponse>>('/admin/users', params);

export const getDetailUser = () => request.get<null, { data: UserDetailResponse }>('/user/detail');

export const changePassword = (payload: IChangePassword) =>
  request.put<IChangePassword, { data: UserDetailResponse }>('/user/change-password', payload);

export const updateUserInfo = (payload: IUserInfoUpdate) =>
  request.put<IUserInfoUpdate, { data: UserDetailResponse }>('/user/update', payload);
