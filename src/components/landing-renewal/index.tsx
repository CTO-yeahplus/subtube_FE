import { getDetailUser } from '@/api/users';
import Icon1 from '@/assets/images/svg/dashboard/icon1.svg';
import Icon2 from '@/assets/images/svg/dashboard/icon2.svg';
import Icon3 from '@/assets/images/svg/dashboard/icon3.svg';
import Icon4 from '@/assets/images/svg/dashboard/icon4.svg';
import IconLogo from '@/assets/images/svg/logo.svg';
import IconChecked from '@/assets/images/svg/my-profile/icon-checked.svg';
import { DEFAULT_LOCALE, ROUTER_PATH } from '@/constants';
import { PRICE } from '@/constants/price';
import { LEVEL_USER } from '@/interfaces';
import { selectCurrentUser, updateUserInfo } from '@/stores/auth/auth.slice';
import { useAppDispatch, useAppSelector } from '@/stores/hooks';
import { formatNumberWithCommas } from '@/utils';
import cookies from '@/utils/cookie';
import { DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';
import { useRouter } from 'next/router';
import React, { useEffect, useState, MouseEvent } from 'react';

import LanguageSwitcher from '../language-switcher';
import { ProfileDropdown } from '../header/profile/profile-dropdown';
import * as S from './index.styles';

// --- Hooks (Typing & Scroll) ---
const useTypingEffect = (words: string[], speed = 150, delay = 2000) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const handleTyping = () => {
      setText(prev => 
        isDeleting ? currentWord.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1)
      );
      if (!isDeleting && text === currentWord) setTimeout(() => setIsDeleting(true), delay);
      else if (isDeleting && text === '') { setIsDeleting(false); setWordIndex((prev) => (prev + 1) % words.length); }
    };
    const timer = setTimeout(handleTyping, isDeleting ? speed / 2 : speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words, speed, delay]);
  return text;
};

const useScrollReveal = () => {
  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.1 });
    document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);
};

const LandingRenewal = () => {
  const { t } = useTranslation(['dashboard', 'common']);
  const router = useRouter();
  const dispatch = useAppDispatch();
  const user = useAppSelector(selectCurrentUser);
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const typingWords = ["Global Reach.", "전 세계로.", "世界へのリーチ。", "Alance Global.", "Reichweite weltweit."]; 
  const dynamicText = useTypingEffect(typingWords);
  useScrollReveal();

  // Spotlight Effect Handler
  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    e.currentTarget.style.setProperty('--mouse-x', `${x}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${y}px`);
  };

  // 기존 로직
  const handleGetUserDetail = async () => {
    try { const res = await getDetailUser(); if (res?.data) dispatch(updateUserInfo(res.data)); } catch (error) { console.log(error); }
  };
  useEffect(() => { if (cookies.get('access_token')) handleGetUserDetail(); }, []);
  
  const handleGetStarted = () => router.push(user ? ROUTER_PATH.YOUTUBE_ACCOUNT : ROUTER_PATH.REGISTER);
  const handleScrollElement = (id: string) => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  const locale = cookies.get('locale') ?? DEFAULT_LOCALE;
  const handleClickTermsOfUse = () => window.open(`/pdf/${locale}/terms-of-use.pdf`);
  const handleClickPolicy = () => window.open(`/pdf/${locale}/privacy-policy.pdf`);

  // Data
  const supportedLanguages = ["English", "한국어", "日本語", "Español", "Français", "Deutsch", "Italiano", "Português", "Русский", "中文", "Tiếng Việt", "Indonesian", "Hindi", "Arabic"];
  
  const bentoData = [
    { title: t('expand.card.title1'), desc: "Speak to the world. Translate into 40+ languages instantly.", icon: <Icon1 />, colSpan: 2 },
    { title: t('expand.card.title2'), desc: "Reach audiences in North America, Asia, and Europe.", icon: <Icon2 />, colSpan: 1 },
    { title: "Boost Engagement", desc: "Higher retention with native subtitles.", icon: <Icon3 />, colSpan: 1 },
    { title: "Save Time & Cost", desc: "AI automation replaces expensive manual work.", icon: <Icon4 />, colSpan: 2 },
  ];

  const planData = [
    { level: LEVEL_USER.BRONZE, title: 'Bronze', price: Number(PRICE[LEVEL_USER.BRONZE].salePrice), features: ['1 YouTube Account', '12 Languages Translation'] },
    { level: LEVEL_USER.SILVER, title: 'Silver', price: Number(PRICE[LEVEL_USER.SILVER].salePrice), features: ['5 YouTube Accounts', '40 Languages Translation'], mostPopular: true },
    { level: LEVEL_USER.GOLD, title: 'Gold', price: Number(PRICE[LEVEL_USER.GOLD].salePrice), features: ['Unlimited Accounts', 'Unlimited Languages'] },
  ];

  const faqData = [
    { q: "Is the translation accurate?", a: "Yes, we use the latest Whisper AI model combined with our proprietary optimization for 99% accuracy." },
    { q: "Can I edit the subtitles?", a: "Absolutely. You get a full editor to tweak timestamps and text before publishing." },
    { q: "Does it upload directly to YouTube?", a: "Yes. Once you approve, Sub-tube pushes the captions and metadata directly to your channel." },
  ];

  return (
    <S.MainLayout>
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
                <S.CtaButton $primary onClick={() => router.push(ROUTER_PATH.REGISTER)} style={{ padding: '8px 16px', fontSize: '13px' }}>{t('menu.signup')}</S.CtaButton>
              </>
            )}
          </S.RightActions>
        </S.HeaderContent>
      </S.HeaderWrapper>

      <S.HeroSection>
        <S.Badge>New Era of Content Creation</S.Badge>
        <S.HeroTitle>
          <span className="static-text">Your Content,</span>
          <span className="dynamic-text">{dynamicText}</span>
        </S.HeroTitle>
        <S.HeroDesc>{t('slide.desc2').split('.')[0]}. Stop limiting your audience.</S.HeroDesc>
        <S.ButtonGroup>
          <S.CtaButton $primary onClick={handleGetStarted}>{t('getStarted')}</S.CtaButton>
          <S.CtaButton onClick={() => handleScrollElement('features')}>{t('learnMore')} ↓</S.CtaButton>
        </S.ButtonGroup>
        <S.RevealOnScroll className="reveal-on-scroll" style={{ marginTop: '80px', width: '100%', maxWidth: '900px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 40px 80px -20px rgba(0,0,0,0.15)' }}>
           <iframe width="100%" height="500" src={`https://www.youtube.com/embed/mquDsw0-erk`} title="Video" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen />
        </S.RevealOnScroll>
      </S.HeroSection>

      {/* NEW: Infinite Marquee Section */}
      <S.MarqueeSection>
        <S.MarqueeTrack>
          {/* Duplicate list to ensure seamless infinite scroll */}
          {[...supportedLanguages, ...supportedLanguages, ...supportedLanguages].map((lang, i) => (
            <S.LanguageItem key={i}>{lang}</S.LanguageItem>
          ))}
        </S.MarqueeTrack>
      </S.MarqueeSection>

      <S.GridSection id="features">
        <S.GridContainer>
          <S.SectionTitle>Everything you need.</S.SectionTitle>
          <S.BentoGrid>
            {bentoData.map((item, idx) => (
              <S.RevealOnScroll key={idx} className="reveal-on-scroll" $delay={`${idx * 0.1}s`}>
                <S.BentoCard 
                  $colSpan={item.colSpan} 
                  onMouseMove={handleMouseMove} // Spotlight Trigger
                >
                  <S.CardIcon>{item.icon}</S.CardIcon>
                  <div><S.CardTitle>{item.title}</S.CardTitle><S.CardText>{item.desc}</S.CardText></div>
                </S.BentoCard>
              </S.RevealOnScroll>
            ))}
          </S.BentoGrid>
        </S.GridContainer>
      </S.GridSection>

      <S.PricingSection id="pricing">
        <S.RevealOnScroll className="reveal-on-scroll">
          <S.SectionTitle>{t('pricing.title')}</S.SectionTitle>
          <p style={{ color: '#86868b', fontSize: '18px' }}>Simple, transparent pricing.</p>
          <S.PricingWrapper>
            {planData.map((plan) => (
              <S.PricingCard key={plan.level} $featured={plan.mostPopular}>
                <S.PlanTitle>{plan.title}</S.PlanTitle>
                <S.PlanPrice>${formatNumberWithCommas(plan.price)}<span> / year</span></S.PlanPrice>
                <div style={{ borderTop: '1px solid #eee', margin: '20px 0' }}></div>
                <S.FeatureList>
                  {plan.features.map((feat, i) => (<S.FeatureItem key={i}><IconChecked /> {feat}</S.FeatureItem>))}
                </S.FeatureList>
                <S.CtaButton $primary={plan.mostPopular} style={{ width: '100%' }} onClick={handleGetStarted}>{t('getStarted')}</S.CtaButton>
              </S.PricingCard>
            ))}
          </S.PricingWrapper>
        </S.RevealOnScroll>
      </S.PricingSection>

      <S.FaqSection id="faq">
        <S.SectionTitle>Q&A</S.SectionTitle>
        {faqData.map((item, index) => (
          <S.FaqItem key={index}>
            <S.FaqQuestion $isOpen={openFaqIndex === index} onClick={() => setOpenFaqIndex(openFaqIndex === index ? null : index)}>
              {item.q} <DownOutlined />
            </S.FaqQuestion>
            <S.FaqAnswer $isOpen={openFaqIndex === index}><p>{item.a}</p></S.FaqAnswer>
          </S.FaqItem>
        ))}
      </S.FaqSection>

      <S.Footer>
        <S.FooterContent>
          <div>{t('footer.copyright', { ns: 'common' })} © {new Date().getFullYear()} Sub-tube.</div>
          <div style={{ display: 'flex', gap: '20px' }}>
            <a onClick={handleClickTermsOfUse}>{t('footer.termsOfUse', { ns: 'common' })}</a>
            <a onClick={handleClickPolicy}>{t('footer.privacyPolicy', { ns: 'common' })}</a>
          </div>
        </S.FooterContent>
      </S.Footer>
    </S.MainLayout>
  );
};

export default LandingRenewal;