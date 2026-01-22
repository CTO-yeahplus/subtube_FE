import { LEVEL_USER } from '@/interfaces';

export interface InfoPlan {
  level: keyof typeof LEVEL_USER;
  title: string;
  description: string;
  currentPriceYear: number;
  currentPriceMonth: number;
  salePriceYear: number;
  salePriceMonth: number;
  mostPopular?: boolean;
  currentPlan?: {
    validUntil: string;
    isCanceled: boolean;
  };
  info: string[];
}

export interface MembershipPlanPayLoad {
  keep_yt_account_id: number[];
  new_rank?: string;
  current_rank: string;
}

export interface PaymentInfo {
  id: number;
  user_id: string;
  rank: string;
  payment_status?: string;
  status: string;
  tax: number;
  sub_total: number;
  total: number;
  expire_date?: string;
  payment_date?: string;
  start_date?: string;
}

export interface PaymentOrder {
  rank: string;
  tax: number;
  sub_total: number;
  total: number;
}

export interface PaymentCapture extends PaymentOrder {
  order_id: string;
}
