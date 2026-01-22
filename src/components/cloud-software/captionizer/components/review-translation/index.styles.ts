import IconRefresh from '@/assets/images/svg/cloud-software/icon-refresh.svg';
import IconError from '@/assets/images/svg/icon-error.svg';
import IconLoading from '@/assets/images/svg/icon-loading.svg';
import { BaseButton } from '@/components/common/base-button';
import { BaseInput } from '@/components/common/inputs/base-input';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import { CloseCircleFilled } from '@ant-design/icons';
import { Tabs } from 'antd';
import styled from 'styled-components';

const { TabPane } = Tabs;

export const Wrapper = styled.div`
  border-radius: 8px;
  background: var(--colors-nutral-white-white-main, #fff);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  margin-top: 32px;
  padding: 24px;
`;

export const Title = styled.div`
  color: var(--text-main-color);
  font-size: 20px;
  font-weight: ${FONT_WEIGHT.bold};
`;

export const TabList = styled(Tabs)`
  margin-top: 24px;

  .ant-tabs-content {
    position: sticky;
    top: 0;
  }

  .ant-tabs-tabpane {
    padding-right: 24px;
  }

  .ant-tabs-tab {
    padding: 18px 36px !important;
    border: 1px solid var(--border-base-color);
    border-top: none;
    border-right: none;
    margin: 0 !important;
    width: 350px;
    height: 60px;
    padding-right: 24px !important;

    &:first-child {
      border-top: 1px solid var(--border-base-color);
      border-radius: 8px 0px 0px 0px;
    }

    &.ant-tabs-tab-active {
      background: #f5f5f5;
      div {
        span {
          font-weight: ${FONT_WEIGHT.bold};
        }
      }
    }
  }

  .ant-tabs-tab-btn {
    width: 100%;
  }

  .ant-tabs-content-holder {
    border-radius: 0px 8px 8px 0px;
    border: 1px solid var(--border-base-color);
  }

  .ant-tabs-ink-bar {
    background: #ff5252;
    width: 4px !important;
  }
`;

export const WrapperTabItem = styled(TabPane)``;

export const TabItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;

export const LanguageItem = styled.div`
  display: flex;
  align-items: center;
`;

export const Flag = styled.span`
  margin-right: 16px;
`;

export const Language = styled.span`
  color: #19509a;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.regular};
`;

export const IconClose = styled(CloseCircleFilled)`
  margin-left: 1rem;
  path {
    fill: #bec0c6;
  }
`;

export const IconErrorText = styled(IconError)`
  zoom: 0.4 !important;
  margin-left: 2rem;
`;

export const IconLoadingTab = styled(IconLoading)`
  zoom: 0.3 !important;
  margin-left: 2rem;
`;

export const WrapperContent = styled.div`
  padding: 24px;
  padding-left: 0px;
`;

export const InputTitle = styled.div`
  color: #19509a;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.bold};
  margin-bottom: 12px;
`;

export const InputDescription = styled.div`
  color: #19509a;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.bold};
  margin-bottom: 12px;
  margin-top: 32px;
`;

export const Required = styled.span`
  color: #ff0000;
`;

export const Input = styled(BaseInput)``;

export const Textarea = styled(BaseInput.TextArea)``;

export const WrapperButton = styled.span`
  display: flex;
  justify-content: center;
`;

export const RestoreButton = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-top: 32px;
  margin-bottom: 1rem;
  padding: 0 24px;
  background: #28b473 !important;
  gap: 12px;
  &:hover {
    background: #28b473 !important;
  }
`;

export const IconButton = styled(IconRefresh)`
  path {
    fill: var(--white);
  }
`;

export const TextError = styled.div`
  margin-top: 12px;
  color: #ff0000;
`;

export const WrapperLoading = styled.div`
  padding: 24px;
  padding-left: 0px;
  height: 275px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
`;

export const Text = styled.div`
  color: #404040;
  text-align: center;
  font-size: 16px;
  font-weight: ${FONT_WEIGHT.medium};
  margin-bottom: 1rem;
`;
