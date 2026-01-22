import { BaseButton } from '@/components/common/base-button';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 24px;
`;

export const ContainerTitleLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const SubTitle = styled.h2`
  color: var(--text-main-color);
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 5px;
`;

export const ContainerTitleRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Title = styled.div`
  color: var(--primary-color);
  font-size: 26px;
  font-weight: ${FONT_WEIGHT.bold};
`;

export const StepButton = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-top: 1.125rem;
  margin-bottom: 1rem;
  padding: 0 24px;
  gap: 12px;
  &:disabled {
    color: var(--white);
    background: #99b9d7;
  }
`;

export const PublishButton = styled(BaseButton)`
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
  &:disabled {
    color: var(--white);
    opacity: 0.6;
  }
`;

export const SelectedVideo = styled.div`
  display: flex;
  align-items: center;
  border-radius: 12px;
  border: 1px solid var(--border-base-color);
  width: 860px;
  padding: 12px;
`;

export const ImageWrapper = styled.div`
  width: 131px;
  height: 90px;
  margin-right: 12px;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 32px;
`;

export const SelectedTitle = styled.div`
  color: var(--primary-color);
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.medium};
  text-transform: capitalize;

  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  word-break: break-all;
`;

export const SelectedDesc = styled.div`
  color: var(--text-main-color);
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.medium};

  word-wrap: break-word;
  overflow: hidden;
  display: -webkit-box;
  text-overflow: ellipsis;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
  word-break: break-all;
`;

export const SelectedDate = styled.div`
  color: #d9d9d9;
  font-size: ${FONT_SIZE.xs};
  font-weight: ${FONT_WEIGHT.medium};
`;
