import { getLabel } from '@/api/labelManagement';
import { GetLabelRequest } from '@/interfaces/labelManagement';

import useAppQuery from '../useAppQuery';

export const useGetLabel = (params?: GetLabelRequest) =>
  useAppQuery({
    queryKey: ['label', params],
    queryFn: () => getLabel(),
  });
