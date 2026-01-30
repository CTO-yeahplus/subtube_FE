// src/components/landing-renewal/index.tsx
import React, { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { selectCurrentUser, updateUserInfo } from '@/stores/auth/auth.slice';
import { getDetailUser } from '@/api/users';
import cookies from '@/utils/cookie';
import { DEFAULT_LOCALE, ROUTER_PATH } from '@/constants';
import IconLogo from '@/assets/images/svg/logo.svg';

// 분리한 컴포넌트 Import
import * as S from './index.styles';
import { HeroSection } from './HeroSection';
import { FeatureSection } from './FeatureSection';
import { PricingSection } from './PricingSection';
import { FaqSection } from './FaqSection';
import { SUPPORTED_LANGUAGES, PLAN_DATA } from './constants';
import { ProfileDropdown } from '../header/profile/profile-dropdown';
import LanguageSwitcher from '../language-switcher';

// PricingSection 컴포넌트는 코드가 길어 생략했지만 FeatureSection과 유사하게 분리하면 됩니다.
// 여기서는 설명을 위해 기존 로직을 인라인으로 처리하되 Motion만 적용하는 예시를 남깁니다.
import { formatNumberWithCommas } from '@/utils';
import IconChecked from '@/assets/images/svg/my-profile/icon-checked.svg';
import { FadeInUp } from './MotionWrapper';

const LandingRenewal = () => {
  const { t } = useTranslation(['dashboard', 'common']);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);

  // --- Auth Logic ---
  const handleGetUserDetail = useCallback(async () => {
    try {
      const res = await getDetailUser();
      if (res?.data) dispatch(updateUserInfo(res.data));
    } catch (error) { console.log(error); }
  }, [dispatch]);

  useEffect(() => {
    const accessToken = cookies.get('access_token');
    if (accessToken) handleGetUserDetail();
  }, [handleGetUserDetail]);

  // --- Handlers ---
  const handleGetStarted = () => router.push(user ? ROUTER_PATH.YOUTUBE_ACCOUNT : ROUTER_PATH.REGISTER);
  const handleScrollElement = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const locale = cookies.get('locale') ?? DEFAULT_LOCALE;

  return (
    <S.MainLayout>
      {/* 1. Header */}
      <S.HeaderWrapper>
        <S.HeaderContent>
          <S.LogoWrapper onClick={() => router.push('/')}><IconLogo /></S.LogoWrapper>
          <S.NavMenu>
            <S.NavItem onClick={() => handleScrollElement('features')}>Features</S.NavItem>
            <S.NavItem onClick={() => handleScrollElement('pricing')}>{t('menu.pricing')}</S.NavItem>
            <S.NavItem onClick={() => handleScrollElement('faq')}>FAQ</S.NavItem>
          </S.NavMenu>
          <S.RightActions>
            <LanguageSwitcher />
            {user ? <ProfileDropdown /> : (
              <>
                <S.NavItem onClick={() => router.push(ROUTER_PATH.LOGIN)}>{t('menu.logIn')}</S.NavItem>
                <S.CtaButton $primary onClick={() => router.push(ROUTER_PATH.REGISTER)} style={{ padding: '8px 16px', fontSize: '13px' }}>
                  {t('menu.signup')}
                </S.CtaButton>
              </>
            )}
          </S.RightActions>
        </S.HeaderContent>
      </S.HeaderWrapper>

      {/* 2. Hero Section (Refactored) */}
      <HeroSection onGetStarted={handleGetStarted} onScrollToFeatures={() => handleScrollElement('features')} />

      {/* 3. Marquee Section */}
      <S.MarqueeSection>
        <S.MarqueeTrack>
          {[...SUPPORTED_LANGUAGES, ...SUPPORTED_LANGUAGES, ...SUPPORTED_LANGUAGES].map((lang, i) => (
            <S.LanguageItem key={i}>{lang}</S.LanguageItem>
          ))}
        </S.MarqueeTrack>
      </S.MarqueeSection>

      {/* 4. Feature Section (Refactored) */}
      <FeatureSection />

      {/* 5. Pricing Section (Inline Motion Example) */}
      <S.PricingSection id="pricing">
        <FadeInUp>
          <S.SectionTitle>{t('pricing.title')}</S.SectionTitle>
          <p style={{ color: '#86868b', fontSize: '18px', textAlign: 'center' }}>Simple, transparent pricing.</p>
        </FadeInUp>
        <S.PricingWrapper>
          {PLAN_DATA.map((plan, i) => (
            <FadeInUp key={plan.level} delay={i * 0.1} style={{ width: '100%' }}>
              <S.PricingCard $featured={plan.mostPopular}>
                <S.PlanTitle>{plan.title}</S.PlanTitle>
                <S.PlanPrice>${formatNumberWithCommas(plan.price)}<span> / year</span></S.PlanPrice>
                <div style={{ borderTop: '1px solid #eee', margin: '20px 0' }}></div>
                <S.FeatureList>
                  {plan.features.map((feat, idx) => (
                    <S.FeatureItem key={idx}><IconChecked /> {feat}</S.FeatureItem>
                  ))}
                </S.FeatureList>
                <S.CtaButton $primary={plan.mostPopular} style={{ width: '100%' }} onClick={handleGetStarted}>
                  {t('getStarted')}
                </S.CtaButton>
              </S.PricingCard>
            </FadeInUp>
          ))}
        </S.PricingWrapper>
      </S.PricingSection>

      {/* 6. FAQ Section (Refactored) */}
      <FaqSection />

      {/* 7. Footer */}
      <S.Footer>
        <S.FooterContent>
          <div>{t('footer.copyright', { ns: 'common' })} © {new Date().getFullYear()} Sub-tube.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a onClick={() => window.open(`/pdf/${locale}/terms-of-use.pdf`)}>{t('footer.termsOfUse', { ns: 'common' })}</a>
            <a onClick={() => window.open(`/pdf/${locale}/privacy-policy.pdf`)}>{t('footer.privacyPolicy', { ns: 'common' })}</a>
          </div>
        </S.FooterContent>
      </S.Footer>
    </S.MainLayout>
  );
};

export default LandingRenewal;