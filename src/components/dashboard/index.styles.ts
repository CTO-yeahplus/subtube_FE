import slideBackground from '@/assets/images/dashboard/slide-bg.png';
import { FONT_SIZE, FONT_WEIGHT } from '@/constants';
import styled from 'styled-components';
import { Swiper } from 'swiper/react';

import { BaseButton } from '../common/base-button';
import { BaseLayout } from '../common/base-layout';

export const LayoutMaster = styled(BaseLayout)`
  width: 100vw;
  height: 100vh;
  background-color: var(--white);
  overflow: scroll;

  &::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }
`;

export const WrapperSlideContainer = styled.div`
  background: url(${slideBackground.src});
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
`;

export const SwiperContainer = styled(Swiper)`
  width: 100%;
  .swiper-pagination-bullet {
    width: 20px;
    height: 20px;
    margin: 0px 12px !important;
    background: var(--white);
    opacity: 1;
  }
  .swiper-pagination-bullet-active {
    background: #5b5b5b;
  }
`;

export const Image = styled.img`
  width: 100%;
`;

export const WrapperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: auto;
  width: 100%;
  max-width: 1220px;
  margin-top: 10px;
`;

export const LinkUrl = styled.div`
  cursor: pointer;
  color: var(--white);
  &:hover {
    color: var(--white);
  }
`;

export const WrapperMenu = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 500px;
`;

export const MenuItem = styled.div`
  color: #404040;
  font-size: 18px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

export const ButtonLogin = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  height: 24px;
  border-radius: 5px;
  margin-right: 10px;
  margin-left: 48px;
  padding: 18px;
`;

export const ButtonSignUp = styled(BaseButton)`
  font-size: ${FONT_SIZE.md};
  font-weight: ${FONT_WEIGHT.semibold};
  height: 24px;
  background-color: transparent;
  border-radius: 5px;
  border: 1px solid var(--primary-color);
  color: var(--primary-color);
  padding: 18px;
`;

export const ProfileDropdownHeader = styled.div`
  cursor: pointer;
  width: 100%;
  min-width: 220px;
  margin-left: 48px !important;
`;

export const NameAvatar = styled.div`
  color: var(--text-main-color);
  font-size: 20px;
  font-weight: 700;
`;

export const Name = styled.h2`
  color: var(--text-dark-color);
  max-width: 150px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  color: #404040;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const WrapperSlideItem = styled.div`
  width: 100%;
  max-width: 1220px;
  margin: auto;
  padding-top: 100px;
`;

export const SlideTitle = styled.div`
  color: #404040;
  text-align: center;
  font-weight: 700;
  line-height: normal;
`;

export const SlideDesc = styled.div`
  color: #404040;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
`;

export const GetStarted = styled.div`
  color: #404040;
  text-align: center;
  font-size: 36px;
  font-weight: 700;
  line-height: normal;
  cursor: pointer;
`;

export const TitlePage = styled.div`
  color: #404040;
  text-align: center;
  font-size: 40px;
  font-weight: 700;
  line-height: normal;
  margin-top: 90px;
  margin-bottom: 50px;
`;

export const WrapperContent = styled.div`
  max-width: 1220px;
  width: 100%;
  margin: auto;
  margin-bottom: 80px;
`;

export const SizeMarket = styled.div`
  display: flex;
  padding: 55px 36px;
  flex-direction: column;
  gap: 40px;
  background: #d9d9d9;
  margin-bottom: 40px;
`;

export const SizeMarketTitle = styled.div`
  color: #404040;
  text-align: center;
  font-size: 32px;
  font-weight: 600;
  line-height: normal;
`;

export const SizeMarketDesc = styled.div`
  color: #404040;
  text-align: center;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
`;

export const Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 48px;
`;

export const TargetTitle = styled.div`
  color: #404040;
  font-size: 32px;
  font-weight: 700;
  line-height: normal;
  font-style: normal;
`;

export const TargetDesc = styled.div`
  color: #404040;
  font-size: 24px;
  font-weight: 400;
  line-height: normal;
  font-style: normal;
`;

export const DivideColumn = styled.div`
  width: 1px;
  height: 300px;
  background: #404040;
`;

export const DescriptionPage = styled.div`
  color: #404040;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 50px 0;
`;

export const Button = styled.div`
  font-size: 32px;
  font-weight: ${FONT_WEIGHT.semibold};
  font-style: normal;
  line-height: normal;
  border-radius: 8px;
  padding: 16px 24px;
  background: #01509a;
  color: var(--white);
  cursor: pointer;
`;

export const Divide = styled.div`
  height: 1px;
  background: #404040;
  margin-top: 90px;
`;

export const Card = styled.div`
  display: flex;
  width: 390px;
  height: 500px;
  padding: 16px;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  flex-shrink: 0;
  border-radius: 24px;
  border: 1px solid #404040;
`;

export const CardTitle = styled.div`
  color: #404040;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  min-height: 58px;
`;

export const CardDescription = styled.div`
  color: #404040;
  text-align: center;
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const WrapperCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;
`;

export const Member = styled.div`
  display: flex;
  padding: 48px 36px;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  border-radius: 24px;
  background: #d9d9d9;
  width: 380px;
  height: 354px;
`;

export const MemberImage = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  align-self: stretch;
  img {
    border-radius: 50%;
  }
`;

export const MemberName = styled.div`
  color: #404040;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 24px;
`;

export const MemberInfo = styled.div`
  color: #404040;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  align-self: stretch;
`;

export const IFrame = styled.iframe`
  width: 100%;
  height: 500px;
  margin-bottom: 50px;
`;

export const CardOverview = styled.div`
  display: flex;
  padding: 24px;
  flex-direction: column;
  justify-content: start;
  border: 1px solid #404040;
  background: #fff;
  border-radius: 12px;
  width: 300px;
  height: 360px;
`;

export const ContainerLevel = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
`;

export const Level = styled.span`
  color: #404040;
  font-size: 36px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  text-transform: capitalize;
`;

export const DescriptionOverview = styled.div`
  color: #404040;
  font-size: 13px;
  margin-bottom: 16px;
  min-height: 40px;
`;

export const SubSale = styled.del`
  color: #01509a;
  font-size: 16px;
  line-height: normal;
  justify-content: start;
  position: relative;
  width: fit-content;
  margin-bottom: 10px;
  ::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 50%;
    border-top: 3px solid red;
    transform: translateY(-50%);
  }
`;

export const PriceYear = styled.span`
  color: #01509a;
  font-size: 42px;
  font-weight: 700;
  line-height: normal;
  margin-bottom: 14px;
`;

export const TextYear = styled.span`
  color: #01509a;
  font-size: 16px;
  line-height: normal;
  font-weight: 400;
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  border-radius: 8px;
  margin-bottom: 12px;
`;

export const TextInfo = styled.div`
  color: #404040;
  font-size: 12px;
  font-weight: 400;
  line-height: normal;
  margin-left: 10px;
`;

export const WrapperFooter = styled.div`
  background: #01509a;
  padding-top: 32px;
`;

export const ContentFooter = styled.div`
  display: flex;
  margin: auto;
  width: 100%;
  max-width: 1220px;
  flex-direction: column;
  align-items: flex-start;
  gap: 32px;
  color: var(--white);
  font-size: 20px;
  font-weight: 400;
`;

export const CompanyName = styled.div`
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

export const Reserved = styled.div`
  display: flex;
  padding: 12px 0px;
  justify-content: space-between;
  align-items: center;
  align-self: stretch;
  border-top: 1px solid var(--white);
  font-size: 16px;
`;

export const Copyright = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 440px;
`;
