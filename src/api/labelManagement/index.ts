import { request } from '@/api/request';
import { GetLabelRequest, GetLabelResponse, ResponseData } from '@/interfaces';

export const getLabel = (params?: GetLabelRequest) =>
  request.get<GetLabelRequest, ResponseData<GetLabelResponse>>('/admin/label', params);
