import { PaginationParams } from '@/interfaces/common';

export interface ITags {
  language: string;
  name: string;
  id: number;
  productCount: string;
}

export interface GetTagRequest extends PaginationParams {
  search?: string;
}

export interface GetTagResponse {
  data: ITags[];
}
