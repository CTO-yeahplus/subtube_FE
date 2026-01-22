import {
  getPaymentHistory,
  paymentCapture,
  paymentOrder,
  updatePlan,
} from '@/api/supcription-plan';
import { PaginationParams } from '@/interfaces';

import useAppMutation from '../useAppMutation';
import useAppQuery from '../useAppQuery';

export const useGetPaymentHistory = (params: PaginationParams) =>
  useAppQuery({
    queryKey: ['paymentHistory', params],
    queryFn: () => getPaymentHistory(params),
  });

export const usePaymentOrder = () => useAppMutation(paymentOrder, undefined, { toast: false });

export const usePaymentCapture = () => useAppMutation(paymentCapture, undefined, { toast: false });

export const useChangePlan = () => useAppMutation(updatePlan);
