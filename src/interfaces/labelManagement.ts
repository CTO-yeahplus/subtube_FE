import { PaginationParams } from '@/interfaces';

export interface GetLabelRequest extends PaginationParams {
  search?: string;
}

export interface IParamsLabel extends GetLabelRequest {}

export interface ILabel {
  name: string;
  id: string;
  productCount: string;
}

export interface GetLabelResponse {
  data: ILabel[];
}
