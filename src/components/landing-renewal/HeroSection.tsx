// src/components/landing-renewal/HeroSection.tsx
import React, { useEffect, useState } from 'react';
import * as S from './index.styles';
import { useTranslation } from 'next-i18next';
import { TYPING_WORDS } from './constants';
import { motion } from 'framer-motion';

// Typing Hook (내부 정의)
const useTypingEffect = (words: string[]) => {
  const [text, setText] = useState('');
  const [wordIndex, setWordIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex];
    const speed = isDeleting ? 75 : 150;
    const timer = setTimeout(() => {
      setText((prev) => isDeleting ? currentWord.substring(0, prev.length - 1) : currentWord.substring(0, prev.length + 1));
      if (!isDeleting && text === currentWord) setTimeout(() => setIsDeleting(true), 2000);
      else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    }, speed);
    return () => clearTimeout(timer);
  }, [text, isDeleting, wordIndex, words]);
  return text;
};

interface Props {
  onGetStarted: () => void;
  onScrollToFeatures: () => void;
}

export const HeroSection = ({ onGetStarted, onScrollToFeatures }: Props) => {
  const { t } = useTranslation(['dashboard']);
  const dynamicText = useTypingEffect(TYPING_WORDS);

  return (
    <S.HeroSection>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <S.Badge>New Era of Content Creation</S.Badge>
      </motion.div>

      <S.HeroTitle>
        <span className="static-text">Your Content,</span><br/>
        <motion.span 
          key={dynamicText} // 텍스트 바뀔 때마다 깜빡임 방지 등 처리 가능
          className="dynamic-text"
        >
          {dynamicText}
        </motion.span>
      </S.HeroTitle>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.8 }}
      >
        <S.HeroDesc>{t('slide.desc2').split('.')[0]}. Stop limiting your audience.</S.HeroDesc>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.8 }}
      >
        <S.ButtonGroup>
          <S.CtaButton $primary onClick={onGetStarted}>{t('getStarted')}</S.CtaButton>
          <S.CtaButton onClick={onScrollToFeatures}>{t('learnMore')} ↓</S.CtaButton>
        </S.ButtonGroup>
      </motion.div>

      {/* 비디오: 스크롤 시 확대되며 등장 */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9, y: 50 }}
        whileInView={{ opacity: 1, scale: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.8, ease: "circOut" }}
        style={{ width: '100%', maxWidth: '900px', marginTop: '80px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 40px 80px -20px rgba(0,0,0,0.15)' }}
      >
        <iframe
          width="100%" height="500"
          src={`https://www.youtube.com/embed/mquDsw0-erk`}
          title="Video" frameBorder="0"
          allow="autoplay; encrypted-media" allowFullScreen
        />
      </motion.div>
    </S.HeroSection>
  );
};