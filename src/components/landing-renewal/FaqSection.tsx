// src/components/landing-renewal/FaqSection.tsx
import React, { useState } from 'react';
import * as S from './index.styles';
import { FAQ_DATA } from './constants';
import { DownOutlined } from '@ant-design/icons';
import { motion, AnimatePresence } from 'framer-motion';
import { FadeInUp } from './MotionWrapper';

export const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <S.FaqSection id="faq">
      <FadeInUp>
        <S.SectionTitle>Q&A</S.SectionTitle>
      </FadeInUp>
      {FAQ_DATA.map((item, index) => (
        <FadeInUp key={index} delay={index * 0.1}>
          <S.FaqItem>
            <S.FaqQuestion
              $isOpen={openIndex === index}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              {item.q} 
              <motion.div 
                animate={{ rotate: openIndex === index ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <DownOutlined />
              </motion.div>
            </S.FaqQuestion>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  style={{ overflow: 'hidden' }}
                >
                  <S.FaqAnswer $isOpen={true} style={{ paddingBottom: '24px' }}>
                     {/* S.FaqAnswer의 기본 max-height 등의 스타일을 무력화하거나 감싸야 함 */}
                    <p>{item.a}</p>
                  </S.FaqAnswer>
                </motion.div>
              )}
            </AnimatePresence>
          </S.FaqItem>
        </FadeInUp>
      ))}
    </S.FaqSection>
  );
};