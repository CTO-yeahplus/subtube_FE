import { request } from '@/api/request';
import { GetTagRequest, GetTagResponse, ResponseData } from '@/interfaces';

export const getTag = (params: GetTagRequest) =>
  request.get<GetTagRequest, ResponseData<GetTagResponse>>('/admin/tag', params);
