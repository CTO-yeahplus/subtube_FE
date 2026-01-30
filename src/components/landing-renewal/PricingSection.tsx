import React from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';

// Redux & Utils
import { useAppSelector } from '@/stores/hooks';
import { selectCurrentUser } from '@/stores/auth/auth.slice';
import { formatNumberWithCommas } from '@/utils';
import { ROUTER_PATH } from '@/constants';

// Assets & Styles
import IconChecked from '@/assets/images/svg/my-profile/icon-checked.svg';
import * as S from './index.styles'; // 기존 스타일 파일 재사용
import { PLAN_DATA } from './constants'; // 분리한 데이터 사용
import { FadeInUp } from './MotionWrapper'; // 애니메이션 유틸리티

export const PricingSection = () => {
  const { t } = useTranslation(['dashboard']);
  const router = useRouter();
  const user = useAppSelector(selectCurrentUser);

  // '시작하기' 버튼 클릭 핸들러
  const handleGetStarted = () => {
    router.push(user ? ROUTER_PATH.YOUTUBE_ACCOUNT : ROUTER_PATH.REGISTER);
  };

  return (
    <S.PricingSection id="pricing">
      {/* 1. 섹션 타이틀 (부드럽게 등장) */}
      <FadeInUp>
        <S.SectionTitle>{t('pricing.title')}</S.SectionTitle>
        <p style={{ color: '#86868b', fontSize: '18px', textAlign: 'center', marginTop: '16px' }}>
          Simple, transparent pricing.
        </p>
      </FadeInUp>

      {/* 2. 가격 카드 리스트 */}
      <S.PricingWrapper>
        {PLAN_DATA.map((plan, index) => (
          // 각 카드가 0.1초 간격으로 순차적으로 등장 (delay)
          <FadeInUp 
            key={plan.level} 
            delay={index * 0.1} 
            style={{ width: '100%', display: 'flex' }}
          >
            <S.PricingCard $featured={plan.mostPopular}>
              <S.PlanTitle>{plan.title}</S.PlanTitle>
              
              <S.PlanPrice>
                ${formatNumberWithCommas(plan.price)}
                <span> / year</span>
              </S.PlanPrice>

              {/* 구분선 */}
              <div style={{ borderTop: '1px solid #eee', margin: '24px 0' }}></div>

              {/* 기능 목록 */}
              <S.FeatureList>
                {plan.features.map((feat, i) => (
                  <S.FeatureItem key={i}>
                    <IconChecked width={20} height={20} /> {/* SVG 크기 명시 권장 */}
                    <span>{feat}</span>
                  </S.FeatureItem>
                ))}
              </S.FeatureList>

              {/* 하단 버튼 */}
              <div style={{ marginTop: 'auto', width: '100%' }}>
                <S.CtaButton
                  $primary={plan.mostPopular}
                  style={{ width: '100%' }}
                  onClick={handleGetStarted}
                >
                  {t('getStarted')}
                </S.CtaButton>
              </div>
            </S.PricingCard>
          </FadeInUp>
        ))}
      </S.PricingWrapper>
    </S.PricingSection>
  );
};