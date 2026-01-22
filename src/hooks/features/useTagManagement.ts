import { getTag } from '@/api/tag';
import { GetTagRequest } from '@/interfaces/tags';

import useAppQuery from '../useAppQuery';

export const useGetTag = (params: GetTagRequest) =>
  useAppQuery({
    queryKey: ['tag', params],
    queryFn: () => getTag(params),
  });
