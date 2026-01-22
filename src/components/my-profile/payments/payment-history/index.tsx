import { IConLevel } from '@/components/cloud-software/youtube-account/icon-level';
import { NoData } from '@/components/common/no-data';
import { DATE_FORMAT, RANK_NAME, SORT_TYPE } from '@/constants';
import { useGetPaymentHistory } from '@/hooks/features/useSupcriptionPlan';
import { Pagination, PaginationParams } from '@/interfaces';
import { formatNumberWithCommas } from '@/utils';
import dayjs from 'dayjs';
import { pickBy } from 'lodash';
import { useTranslation } from 'next-i18next';
import { useMemo, useState } from 'react';

import * as S from './index.styles';

type TPaymentHistory = {
  key: string;
  subscriptionPlan: string;
  date: string;
  status: string;
  totalAmount: string;
  type: string;
};

const getBgColor = (status: string) => {
  switch (status) {
    case 'PAID':
      return '#30AF5B';
    case 'PENDING':
      return '#FAB106';
    case 'FAILED':
      return '#D04545';
    default:
      return '';
  }
};

const initialPagination: Pagination = {
  current: 1,
  pageSize: 3,
};

const inittialParams = {
  page: 1,
  pageSize: initialPagination.pageSize,
};

const PaymentHistory = () => {
  const { t } = useTranslation('my-profile');

  const columns = [
    {
      key: 'subscriptionPlan',
      width: 200,
      title: <S.THead>{t('PaymentHistory.SubscriptionPlan')}</S.THead>,
      render: (data: TPaymentHistory) => {
        return (
          <S.TSubPlan>
            <IConLevel level={data?.subscriptionPlan?.toUpperCase()} />
            <S.TSubPlanType>{data?.type}</S.TSubPlanType>
          </S.TSubPlan>
        );
      },
    },
    {
      key: 'date',
      title: <S.THead>{t('PaymentHistory.Date')}</S.THead>,
      sorter: true,
      showSorterTooltip: false,
      render: (data: TPaymentHistory) => (
        <S.TDate>
          {data?.date ? dayjs(data?.date).format(DATE_FORMAT.FULL_DATE_WITH_TIME) : ''}
        </S.TDate>
      ),
    },
    {
      key: 'status',
      title: <S.THead>{t('PaymentHistory.Status')}</S.THead>,
      render: (data: TPaymentHistory) => (
        <S.TStatus bg={getBgColor(data?.status)}>{data?.status}</S.TStatus>
      ),
    },
    {
      key: 'totalAmount',
      title: <S.THead>{t('PaymentHistory.TotalAmount')}</S.THead>,
      render: (data: TPaymentHistory) => (
        <S.TAmount>${formatNumberWithCommas(Number(data?.totalAmount))}</S.TAmount>
      ),
    },
  ];

  const [params, setParams] = useState<PaginationParams>(inittialParams);

  const { data, isLoading } = useGetPaymentHistory(pickBy(params));

  const getTypePlan = (level: string) => {
    switch (level) {
      case RANK_NAME.GOLD:
        return 'Gold Plan';
      case RANK_NAME.SILVER:
        return 'Silver Plan';
      case RANK_NAME.BRONZE:
        return 'Bronze Plan';
      default:
        return '';
    }
  };

  const tableData = useMemo(() => {
    return {
      data:
        data?.data?.payments.map((item) => {
          return {
            key: item.id,
            subscriptionPlan: item.rank,
            date: item.payment_date,
            status: item.status,
            totalAmount: item.total,
            type: getTypePlan(item.rank),
          };
        }) || [],
      pagination: {
        current: Number(data?.data.pagination?.current_page) || initialPagination.current,
        pageSize: data?.data?.pagination?.per_page || initialPagination.pageSize,
        total: data?.data?.pagination?.total || initialPagination.total,
      },
    };
  }, [data]);

  const handleTableChange = (pagination: Pagination, _: any, sorter: any) => {
    const sortData = sorter.order
      ? {
          sortField: 'payment_date',
          sortBy: sorter.order === 'ascend' ? SORT_TYPE.asc : SORT_TYPE.desc,
        }
      : {
          sortField: undefined,
          sortBy: undefined,
        };

    setParams((prev) => {
      return {
        ...prev,
        page: pagination.current,
        pageSize: pagination.pageSize,
        ...sortData,
      };
    });
  };

  return (
    <S.PaymentHistory>
      <S.Title>{t('PaymentHistory.title')}</S.Title>
      <S.Table
        columns={columns}
        dataSource={tableData.data}
        pagination={tableData.pagination}
        loading={isLoading}
        onChange={handleTableChange}
        locale={{
          emptyText: <NoData />,
        }}
      />
    </S.PaymentHistory>
  );
};

export default PaymentHistory;
