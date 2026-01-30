// src/components/landing-renewal/FeatureSection.tsx
import React from 'react';
import * as S from './index.styles';
import { getBentoData } from './constants';
import { useTranslation } from 'next-i18next';
import { FadeInUp } from './MotionWrapper';

export const FeatureSection = () => {
  const { t } = useTranslation(['dashboard']);
  const bentoData = getBentoData(t);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top } = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty('--mouse-x', `${e.clientX - left}px`);
    e.currentTarget.style.setProperty('--mouse-y', `${e.clientY - top}px`);
  };

  return (
    <S.GridSection id="features">
      <S.GridContainer>
        <FadeInUp>
          <S.SectionTitle>Everything you need.</S.SectionTitle>
        </FadeInUp>
        <S.BentoGrid>
          {bentoData.map((item, idx) => (
            <FadeInUp key={idx} delay={idx * 0.1} style={{ gridColumn: `span ${item.colSpan}` }}>
              <S.BentoCard
                $colSpan={item.colSpan}
                onMouseMove={handleMouseMove}
              >
                <S.CardIcon>{item.icon}</S.CardIcon>
                <div>
                  <S.CardTitle>{item.title}</S.CardTitle>
                  <S.CardText>{item.desc}</S.CardText>
                </div>
              </S.BentoCard>
            </FadeInUp>
          ))}
        </S.BentoGrid>
      </S.GridContainer>
    </S.GridSection>
  );
};