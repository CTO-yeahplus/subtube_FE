import { BaseButton } from '@/components/common/base-button';
import { BaseModal } from '@/components/common/base-modal/BaseModal';
import { BasePopover } from '@/components/common/base-popover';
import { FONT_SIZE, FONT_WEIGHT, media } from '@/constants';
import Image from 'next/image';
import styled from 'styled-components';

interface ButtonProps {
  $bgColor?: string;
  $color?: string;
}

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

export const ContainerTitle = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const ContainerTitleLeft = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ContainerTitleRight = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const Title = styled.h1`
  color: #01509a;
  font-size: 26px;
  font-style: normal;
  font-weight: 700;
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

export const ContainerCard = styled.div`
  display: flex;
  gap: 16px;
`;

export const ContainerYourAccount = styled.div`
  display: flex;
  padding: 16px 50px;
  justify-content: space-between;
  align-items: center;
  gap: 32px;
  align-self: stretch;
  border-radius: 12px;
  background: var(--colors-nutral-white-white-main, #fff);
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
`;

export const WrapperAccount = styled.div`
  display: flex;
  flex-direction: column;
`;

export const AccountTitle = styled.div`
  color: var(--text-main-color);
  font-size: 20px;
  font-weight: 700;
`;

export const AccountDesc = styled.div`
  color: var(--text-main-color);
  font-size: 16px;
  font-weight: 500;
`;

export const AddAccountButton = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  margin-top: 1.125rem;
  margin-bottom: 1rem;
`;

export const ContainerChannel = styled.div`
  display: grid;
  flex-wrap: wrap;
  gap: 16px;
  @media only screen and ${media.xs} {
    grid-template-columns: 1fr;
  }

  @media only screen and ${media.sm} {
    grid-template-columns: 1fr;
  }

  @media only screen and ${media.lg} {
    grid-template-columns: 1fr 1fr;
  }

  @media only screen and ${media.xl} {
    grid-template-columns: 1fr 1fr 1fr;
  }

  @media only screen and ${media.xxl} {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }

  @media only screen and ${media.xxxl} {
    grid-template-columns: 1fr 1fr 1fr 1fr 1fr;
  }
`;

export const CardYoutubeChannel = styled.div`
  height: 140px;
  padding: 16px;
  align-items: center;
  gap: 16px;

  position: relative;
  border-radius: 8px;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

export const ChannelInfo = styled.div`
  margin: 0 3rem 0 5.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const ChannelTitle = styled.p`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: var(--text-main-color);
  font-size: 18px;
  font-weight: 700;
  width: 100%;
`;

export const Popover = styled(BasePopover)`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 1rem;
`;

export const ChannelVideo = styled.div`
  color: var(--text-main-color);
  font-size: 16px;
  font-weight: 500;
`;

export const Avatar = styled(Image)`
  border-radius: 50%;
  background-color: #d9d9d9;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
`;

export const Empty = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export const NoDataTitle = styled.div`
  color: var(--text-main-color);
  text-align: center;
  font-size: 20px;
  font-weight: 700;
`;

export const NoDataDesc = styled.div`
  color: var(--text-main-color);
  text-align: center;
  font-size: 16px;
  font-weight: 500;
`;

export const Button = styled(BaseButton)<ButtonProps>`
  width: 150px;
  height: 50px;
  background-color: ${({ $bgColor }) => $bgColor};
  color: ${({ $color }) => $color};
  &:hover {
    background-color: ${({ $bgColor }) => $bgColor};
    color: ${({ $color }) => $color};
  }
  &:focus {
    background-color: ${({ $bgColor }) => $bgColor};
    color: ${({ $color }) => $color};
  }
  &:active {
    background-color: ${({ $bgColor }) => $bgColor};
    color: ${({ $color }) => $color};
  }
`;

export const MenuButton = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 200px;
  cursor: pointer;
`;

export const InfoButton = styled.div`
  cursor: pointer;
`;

export const Divider = styled.div`
  width: 100%;
  height: 1px;
  background: var(--text-main-color);
  margin: 10px 0;
`;

export const ModalDelete = styled(BaseModal)``;
export const ModalLimitConnect = styled(BaseModal)``;

export const ContainerModal = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const ModalTitle = styled.div`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
`;

export const ModalDesc = styled.div`
  color: var(--text-main-color);
  text-align: center;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

export const ModalBtn = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 350px;
  margin: auto;
`;

export const Icon = styled.div`
  text-align: center;
`;

export const Pagination = styled.div`
  display: flex;
  justify-content: end;
`;
