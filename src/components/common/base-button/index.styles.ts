import { FONT_WEIGHT } from '@/constants';
import { Severity } from '@/interfaces';
import { defineColorBySeverity } from '@/utils';
import { Button as AntButton } from 'antd';
import styled, { css } from 'styled-components';

interface BtnProps {
  $severity?: Severity;
  $noStyle?: boolean;
}

// src/components/common/base-button/index.styles.ts

export const Button = styled(AntButton)<BtnProps>`
  /* 기본 리셋 */
  height: auto;
  padding: 12px 28px;
  border-radius: 980px; /* Pill Shape */
  font-size: 17px;
  font-weight: 500;
  border: none;
  transition: all 0.3s ease;

  /* Primary Button (Blue) */
  &.ant-btn-primary {
    background: #0071e3;
    box-shadow: none;
    
    &:hover {
      background: #0077ed; /* 살짝 밝아짐 */
      transform: scale(1.01); /* 미세한 커짐 */
    }
    
    &:active {
      transform: scale(0.98); /* 눌리는 느낌 */
    }
  }

  /* Default/Ghost Button */
  &.ant-btn-default {
    background: rgba(0, 0, 0, 0.05); /* 옅은 회색 배경 */
    color: #1d1d1f;
    border: none;

    &:hover {
      background: rgba(0, 0, 0, 0.1);
      color: #000;
    }
  }
`;
