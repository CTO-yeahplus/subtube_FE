import IconNoData from '@/assets/images/svg/icon-no-data.svg';
import { useTranslation } from 'next-i18next';
import React from 'react';

import * as S from './index.styles';

interface IProps {
  subText?: string;
  titleSize?: 'md' | 'sm';
}

export const NoData: React.FC<IProps> = (props) => {
  const { subText, titleSize } = props;
  const { t } = useTranslation();
  return (
    <S.NotFoundWrapper>
      <S.ImgWrapper>
        <IconNoData />
      </S.ImgWrapper>
      <S.Text size={titleSize}>{t('noData')}</S.Text>
      {subText && <S.SubText>{subText}</S.SubText>}
    </S.NotFoundWrapper>
  );
};
