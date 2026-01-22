import { BaseTable } from '@/components/common/base-table';
import { FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const PaymentHistory = styled.div``;

export const Title = styled.h2`
  font-size: 1.25rem;
  font-weight: ${FONT_WEIGHT.bold};
  color: var(--text-dark-color);
  margin-bottom: 1.5rem;
`;

export const Table = styled(BaseTable)`
  & .ant-table-container {
    border: 1px solid #ccdceb;
    border-radius: 0.5rem;
  }
  & thead .ant-table-cell {
    padding: 1.5rem !important;
    background: #f5f5f5;
    color: #01509a !important;
    font-weight: ${FONT_WEIGHT.regular} !important;
    font-size: 14px;
    &::before {
      display: none;
    }
  }
  & thead .ant-table-cell:not(:first-child) {
    text-align: center !important;
  }
  & thead .ant-table-cell:last-child {
    border-top-right-radius: 0.5rem !important;
  }
  & thead .ant-table-cell:first-child {
    border-top-left-radius: 0.5rem !important;
  }
  & tbody tr:last-child td {
    border-bottom: none;
  }

  & tbody tr td:first-child {
    padding-left: 1.5rem !important;
  }
`;

export const THead = styled.div`
  font-weight: ${FONT_WEIGHT.regular};
`;

export const TSubPlan = styled.div`
  display: flex;
  align-items: center;
  > span {
    margin-left: 32px;
  }

  @media only screen and (max-width: 1400px) {
    flex-direction: column;
    width: 75px;
    > span {
      margin: 5px 0 0;
    }
  }
`;

export const TSubPlanType = styled.span`
  font-size: 0.875rem;
  font-weight: ${FONT_WEIGHT.regular};
`;

export const TDate = styled.div`
  font-weight: ${FONT_WEIGHT.regular};
  text-align: center;
`;

export const TStatus = styled.div<{ bg: string }>`
  font-weight: ${FONT_WEIGHT.bold};
  padding: 0.375rem 0.75rem;
  background-color: ${({ bg }) => bg};
  color: var(--white);
  border-radius: 6px;
  width: 100px;
  text-align: center;
  margin: auto;
`;

export const TAmount = styled.div`
  font-weight: ${FONT_WEIGHT.bold};
  text-align: center;
`;
