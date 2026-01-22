import { FONT_SIZE } from '@/constants';
import { Table as AntdTable } from 'antd';
import styled from 'styled-components';

export const Table = styled(AntdTable)`
  & .ant-table-content {
    border: 1px solid #d9d9d9;
  }

  & thead .ant-table-cell {
    color: var(--text-main-color) !important;
    background: var(--primary1-color) !important;
    font-size: ${FONT_SIZE.md};
    line-height: 1.25rem;
    font-weight: 700;
    border-bottom: 1px solid #d9d9d9 !important;

    /* & .anticon {
      color: var(--primary-color);
    } */
  }

  & tbody .ant-table-cell {
    color: var(--text-main-color);
    font-size: ${FONT_SIZE.md};
    line-height: 1.25rem;
    border-bottom: 1px solid #d9d9d9 !important;
  }

  & tbody .ant-table-row-expand-icon {
    min-height: 1.25rem;
    min-width: 1.25rem;
    border-radius: 0.1875rem;
    margin-top: 0;
  }

  /* Override default antd selector */
  &
    .ant-table-thead
    > tr
    > th:not(:last-child):not(.ant-table-selection-column):not(.ant-table-row-expand-icon-cell):not(
      [colspan]
    )::before {
    background-color: var(--primary-color);
  }

  & .ant-pagination-prev,
  .ant-pagination-next,
  .ant-pagination-jump-prev,
  .ant-pagination-jump-next,
  .ant-select-selector,
  .ant-select-selection-search-input,
  .ant-select-selection-item,
  .ant-pagination-item {
    min-width: 2.0625rem;
    height: 2.0625rem !important;
    line-height: 2.0625rem !important;
    border-radius: 0;
    font-size: ${FONT_SIZE.xs};
    border-radius: 4px;
  }

  & .ant-pagination-prev .ant-pagination-item-link,
  .ant-pagination-next .ant-pagination-item-link {
    border-radius: 4px;
  }

  & .ant-checkbox-inner {
    border-radius: 0.1875rem;
    height: 1.25rem;
    width: 1.25rem;
    border: 1px solid var(--primary-color);
  }

  & .editable-row .ant-form-item-explain {
    position: absolute;
    top: 100%;
    font-size: 0.75rem;
  }

  .ant-table-column-sort {
    background-color: transparent;
  }

  .ant-pagination-item-container .ant-pagination-item-ellipsis {
    color: var(--disabled-color);
  }

  .ant-pagination-disabled {
    .ant-pagination-item-link,
    .ant-pagination-item a {
      color: var(--disabled-color);
    }
  }

  .ant-pagination.ant-pagination-disabled {
    .ant-pagination-item-link,
    .ant-pagination-item a {
      color: var(--disabled-color);
    }
  }

  .ant-pagination .ant-pagination-item-active {
    background: #01509a;
    a {
      color: var(--white);
    }
  }
` as typeof AntdTable;
