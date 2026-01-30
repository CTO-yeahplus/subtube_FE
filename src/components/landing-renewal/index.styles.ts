import { FONT_FAMILY, media } from '@/constants';
import { Layout } from 'antd';
import styled, { css, keyframes } from 'styled-components';

// [추가] 타이핑 커서 애니메이션
const blink = keyframes`
  0% { border-color: transparent; }
  50% { border-color: #0071e3; }
  100% { border-color: transparent; }
`;

const fadeInUp = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

export const marquee = keyframes`
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
`;

export const MainLayout = styled(Layout)`
  background: #ffffff;
  min-height: 100vh;
  font-family: 'SF Pro Display', ${FONT_FAMILY.main}, -apple-system, sans-serif;
  overflow-x: hidden;
`;

// --- Glass Header ---
export const HeaderWrapper = styled.header`
  position: sticky;
  top: 0;
  z-index: 1000;
  width: 100%;
  height: 64px;
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
`;

export const HeaderContent = styled.div`
  width: 100%;
  max-width: 1200px;
  padding: 0 24px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const LogoWrapper = styled.div`
  cursor: pointer;
  svg {
    height: 24px;
    width: auto;
  }
`;

export const NavMenu = styled.nav`
  display: none;
  gap: 40px;

  @media ${media.md} {
    display: flex;
  }
`;

export const NavItem = styled.a`
  font-size: 14px;
  color: #1d1d1f;
  opacity: 0.8;
  font-weight: 500;
  transition: opacity 0.2s;
  cursor: pointer;

  &:hover {
    opacity: 1;
  }
`;

export const RightActions = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

// --- Hero Section ---
export const HeroSection = styled.section`
  padding: 160px 24px 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  max-width: 1000px;
  margin: 0 auto;
  animation: ${fadeInUp} 1s ease-out;
`;

export const Badge = styled.div`
  font-size: 14px;
  font-weight: 600;
  color: #0071e3;
  margin-bottom: 24px;
  letter-spacing: -0.01em;
`;

// HeroTitle에 타이핑 효과를 위한 span 스타일 추가
export const HeroTitle = styled.h1`
  font-size: 48px;
  line-height: 1.05;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: #1d1d1f;
  margin-bottom: 24px;
  min-height: 160px; /* 텍스트 변경 시 높이 흔들림 방지 */

  @media ${media.md} {
    font-size: 80px;
  }

  /* 고정 텍스트 */
  .static-text {
    display: block;
    color: #1d1d1f;
  }

  /* 변하는 텍스트 (그라데이션 + 타이핑 효과) */
  .dynamic-text {
    background: linear-gradient(135deg, #0071e3 0%, #42a5f5 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    border-right: 4px solid #0071e3; /* 커서 */
    padding-right: 4px;
    animation: ${blink} 0.8s step-end infinite;
  }
`;

// [추가] Scroll Reveal 효과를 위한 클래스
export const RevealOnScroll = styled.div<{ $delay?: string }>`
  opacity: 0;
  transform: translateY(30px);
  transition: all 1s cubic-bezier(0.16, 1, 0.3, 1);
  transition-delay: ${(props) => props.$delay || '0s'};

  &.visible {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const HeroDesc = styled.p`
  font-size: 20px;
  line-height: 1.5;
  font-weight: 400;
  color: #86868b;
  max-width: 560px;
  margin-bottom: 48px;
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`;

export const CtaButton = styled.button<{ $primary?: boolean }>`
  padding: 14px 30px;
  border-radius: 980px;
  font-size: 17px;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 1, 0.5, 1);
  border: none;
  display: inline-flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.$primary
      ? css`
          background: #0071e3;
          color: white;
          &:hover {
            background: #0077ed;
            transform: scale(1.02);
            box-shadow: 0 10px 20px rgba(0, 113, 227, 0.2);
          }
        `
      : css`
          background: transparent;
          color: #0071e3;
          &:hover {
            text-decoration: underline;
          }
        `}
`;

// --- Bento Grid (Features) ---
export const GridSection = styled.section`
  background: #fbfbfd;
  padding: 120px 24px;
`;

export const GridContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

export const SectionTitle = styled.h2`
  font-size: 40px;
  font-weight: 700;
  color: #1d1d1f;
  margin-bottom: 60px;
  text-align: center;
  letter-spacing: -0.02em;
`;

// [추가] Infinite Marquee Section
export const MarqueeSection = styled.div`
  padding: 40px 0;
  background: #fbfbfd;
  overflow: hidden;
  display: flex;
  position: relative;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 150px;
    height: 100%;
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, #fbfbfd, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #fbfbfd, transparent);
  }
`;

export const MarqueeTrack = styled.div`
  display: flex;
  gap: 60px;
  animation: ${marquee} 40s linear infinite;
  width: max-content;

  &:hover {
    animation-play-state: paused;
  }
`;

export const LanguageItem = styled.div`
  font-size: 24px;
  font-weight: 700;
  color: #d2d2d7;
  white-space: nowrap;
  transition: color 0.3s;
  cursor: default;

  &:hover {
    color: #0071e3;
  }
`;

export const BentoGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 24px;

  @media ${media.md} {
    grid-template-columns: repeat(3, 1fr);
    grid-auto-rows: 320px;
  }
`;

// [수정] BentoCard에 Spotlight 효과를 위한 스타일 추가
export const BentoCard = styled.div<{ $colSpan?: number; $bg?: string }>`
  background: #ffffff;
  border-radius: 30px; /* 더 큰 둥근 모서리 */
  padding: 40px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: left;
  
  /* 부드러운 그림자와 미세한 테두리 */
  box-shadow: 0 4px 24px rgba(0, 0, 0, 0.04); 
  border: 1px solid rgba(0, 0, 0, 0.04);
  
  position: relative;
  overflow: hidden;
  transition: all 0.5s cubic-bezier(0.2, 0.8, 0.2, 1); /* 부드러운 물리 애니메이션 */

  /* Hover 시 살짝 떠오르며 그림자 확산 */
  &:hover {
    transform: scale(1.02);
    box-shadow: 0 30px 60px rgba(0, 0, 0, 0.12);
  }

  /* Spotlight Effect (기존 로직 유지하되 투명도 조정) */
  &::before {
    background: radial-gradient(
      800px circle at var(--mouse-x) var(--mouse-y),
      rgba(0, 113, 227, 0.04), /* 너무 파랗지 않게 은은하게 */
      transparent 40%
    );
  }
`;

export const CardIcon = styled.div`
  width: 48px;
  height: 48px;
  margin-bottom: 20px;

  svg {
    width: 100%;
    height: 100%;
  }
`;
// 텍스트 스타일 개선
export const CardTitle = styled.h3`
  font-size: 28px;
  font-weight: 600;
  margin-bottom: 12px;
  color: #1d1d1f;
`;

export const CardText = styled.p`
  font-size: 17px;
  line-height: 1.5;
  color: #86868b; /* Apple Gray */
  font-weight: 500;
`;

// --- Pricing ---
export const PricingSection = styled.section`
  padding: 120px 24px;
  background: #fff;
  text-align: center;
`;

export const PricingWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 30px;
  flex-wrap: wrap;
  margin-top: 60px;
`;

export const PricingCard = styled.div<{ $featured?: boolean }>`
  width: 320px;
  padding: 40px;
  border-radius: 24px;
  text-align: left;
  background: #fff;
  border: 1px solid ${(props) => (props.$featured ? '#0071e3' : '#d2d2d7')};
  box-shadow: ${(props) => (props.$featured ? '0 12px 32px rgba(0,113,227,0.12)' : 'none')};
  position: relative;

  ${(props) =>
    props.$featured &&
    css`
      transform: scale(1.05);
    `}
`;

export const PlanTitle = styled.h3`
  font-size: 24px;
  font-weight: 700;
  color: #1d1d1f;
  margin-bottom: 8px;
`;

export const PlanPrice = styled.div`
  font-size: 40px;
  font-weight: 700;
  color: #1d1d1f;
  margin-bottom: 24px;

  span {
    font-size: 14px;
    font-weight: 500;
    color: #86868b;
  }
`;

export const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 30px 0;
`;

export const FeatureItem = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  font-size: 14px;
  color: #424245;

  svg {
    width: 16px;
    height: 16px;
    color: #0071e3;
  }
`;

// --- Footer ---
export const Footer = styled.footer`
  background: #f5f5f7;
  padding: 40px 24px;
  border-top: 1px solid #d2d2d7;
`;

export const FooterContent = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 12px;
  color: #86868b;

  a {
    color: #424245;
    margin-left: 20px;
    &:hover {
      text-decoration: underline;
    }
  }
`;

// [추가] FAQ Section Styles
export const FaqSection = styled.section`
  padding: 100px 24px;
  background: #ffffff;
  max-width: 800px;
  margin: 0 auto;
`;

export const FaqItem = styled.div`
  border-bottom: 1px solid #d2d2d7;
  &:last-child {
    border-bottom: none;
  }
`;

export const FaqQuestion = styled.button<{ $isOpen: boolean }>`
  width: 100%;
  text-align: left;
  padding: 24px 0;
  font-size: 18px;
  font-weight: 600;
  color: #1d1d1f;
  background: none;
  border: none;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;

  svg {
    transform: rotate(${(props) => (props.$isOpen ? '180deg' : '0deg')});
    transition: transform 0.3s ease;
    color: #86868b;
  }

  &:hover {
    color: #0071e3;
    svg {
      color: #0071e3;
    }
  }
`;

export const FaqAnswer = styled.div<{ $isOpen: boolean }>`
  max-height: ${(props) => (props.$isOpen ? '200px' : '0')};
  overflow: hidden;
  transition: max-height 0.4s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.4s ease;
  opacity: ${(props) => (props.$isOpen ? '1' : '0')};

  p {
    padding-bottom: 24px;
    font-size: 16px;
    color: #424245;
    line-height: 1.5;
  }
`;
