import { BaseButton } from '@/components/common/base-button';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';

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

export const WrapperExclusionTag = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const ExclusionTag = styled.div`
  display: flex;
  padding: 4px 4px 4px 8px;
  align-items: center;
  gap: 4px;
  border-radius: 4px;
  background: #d04545;
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.regular};
  color: var(--white);
`;

export const WrapButton = styled.div`
  display: flex;
  gap: 2rem;
  margin-top: 1.5rem;
`;

export const WrapExclusion = styled.div`
  display: flex;
  margin-top: 1.5rem;
  gap: 1rem;
  align-items: center;
`;

export const ExclusionTitle = styled.p`
  color: var(--primary-color);
  font-weight: ${FONT_WEIGHT.bold};
`;

export const WrapExcludeButton = styled.div`
  display: flex;
  margin-top: 1.6rem;
  align-items: center;
  flex-direction: column;
`;

export const TextError = styled.p`
  color: #ff0000;
`;

export const ReadButton = styled(BaseButton)`
  background: #28b473 !important;
  &:hover {
    background: #28b473 !important;
  }
`;
