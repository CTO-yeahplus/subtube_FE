// src/components/landing-renewal/MotionWrapper.tsx
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  children: React.ReactNode;
  delay?: number;
  className?: string;
  style?: React.CSSProperties;
}

// 아래에서 위로 부드럽게 올라오는 효과
export const FadeInUp = ({ children, delay = 0, className, style }: Props) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }} // 화면에 100px 들어오면 실행
    transition={{ duration: 0.8, delay, ease: [0.25, 0.4, 0.25, 1] }}
    className={className}
    style={style}
  >
    {children}
  </motion.div>
);