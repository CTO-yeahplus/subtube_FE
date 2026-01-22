import React from 'react';

import * as S from './index.styles';

interface ICardStatistics {
  count: number;
  title: string;
  backgroundColor: string;
  boxShadowColor: string;
  icon: React.ReactNode;
  positionIcon?: boolean; // true: right & false: left
}

const CardStatistics = ({
  count,
  title,
  backgroundColor,
  boxShadowColor,
  icon,
  positionIcon = true,
}: ICardStatistics) => {
  return (
    <S.Card $bgColor={backgroundColor} $boxShadowColor={boxShadowColor}>
      {positionIcon ? (
        <>
          <S.LeftInsideCard>
            <S.NumberInsideCard>{count}</S.NumberInsideCard>
            <S.SubTitleInsideCard>{title}</S.SubTitleInsideCard>
          </S.LeftInsideCard>
          <S.RightInsideCard>{icon}</S.RightInsideCard>
        </>
      ) : (
        <>
          <S.RightInsideCard>{icon}</S.RightInsideCard>
          <S.LeftInsideCard>
            <S.NumberInsideCardLeft>{count}</S.NumberInsideCardLeft>
            <S.SubTitleInsideCard>{title}</S.SubTitleInsideCard>
          </S.LeftInsideCard>
        </>
      )}
    </S.Card>
  );
};

export default CardStatistics;
