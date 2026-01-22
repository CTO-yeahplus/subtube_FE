import { request } from '@/api/request';
import { PaginationParams, ResponseData } from '@/interfaces';
import {
  MembershipPlanPayLoad,
  PaymentCapture,
  PaymentInfo,
  PaymentOrder,
} from '@/interfaces/plan-overview';

export const getPaymentHistory = (params: PaginationParams) =>
  request.get<PaginationParams, ResponseData<{ payments: PaymentInfo[] }>>('/user', params);

export const paymentOrder = (payload: PaymentOrder) =>
  request.post<PaymentOrder, ResponseData<any>>('/user/payment-order-paypal', payload);

export const paymentCapture = (payload: PaymentCapture) =>
  request.post<PaymentCapture, ResponseData<any>>('/user/payment-capture-paypal', payload);

export const updatePlan = (payload: MembershipPlanPayLoad) =>
  request.post(`/user/payment/membership`, payload);

export const getOrderDetail = (id: string) =>
  request.get<string, ResponseData<any>>(`/user/detail-order/${id}`);
