import IconRefresh from '@/assets/images/svg/cloud-software/icon-refresh.svg';
import { BaseButton } from '@/components/common/base-button';
import { BaseImage } from '@/components/common/base-image';
import { BaseTable } from '@/components/common/base-table';
import { BaseInput } from '@/components/common/inputs/base-input';
import { BaseSelect } from '@/components/common/selects/base-select';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const Action = styled.div`
  display: flex;
  align-items: center;
  gap: 0.75rem;
`;

export const Image = styled(BaseImage)`
  width: 100%;
  max-width: 116px;
  max-height: 80px;
  border-radius: 0.5rem;
`;

export const SelectedAccount = styled.div`
  display: flex;
  justify-content: space-between;
  height: 50px;
  margin: 32px 0;
`;

export const WrapperAccount = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 40px;
`;

export const Text = styled.div`
  color: #19509a;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.bold};
`;

export const Select = styled(BaseSelect)`
  width: 250px;
`;

export const IconButton = styled(IconRefresh)`
  path {
    fill: var(--white);
  }
`;

export const RefreshButton = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-top: 1.125rem;
  margin-bottom: 1rem;
  padding: 0 24px;
  background: #28b473 !important;
  gap: 12px;
  &:hover {
    background: #28b473 !important;
  }
`;

export const SearchInput = styled(BaseInput)``;

export const TableVideoContainer = styled.div``;

export const TableVideo = styled(BaseTable)`
  .ant-table-container {
    border: 1px solid #bec0c6;
    border-radius: 0.5rem;
    overflow: hidden;
    box-shadow: 0px 0px 8px 0 rgba(0, 0, 0, 0.1);
  }

  .ant-table-cell {
    &::before {
      background-color: unset !important;
    }
  }

  .ant-table-row {
    cursor: pointer;
  }

  .active {
    background: var(--notification-primary-color);
  }
`;

export const TableTitle = styled.div`
  color: var(--primary-color);
  font-weight: ${FONT_WEIGHT.medium};
  text-transform: capitalize;

  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  word-break: break-all;
`;

export const TextSuccess = styled.div`
  display: flex;
  width: 50px;
  height: 30px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: #78cd94;
  color: var(--white);
`;

export const TextError = styled.div`
  display: flex;
  width: 50px;
  height: 30px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 4px;
  background: #ff5252;
  color: var(--white);
`;

export const TableDescription = styled.div`
  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 3;
  word-break: break-all;
`;
