import IconLogo from '@/assets/images/svg/logo.svg';
import { ROUTER_PATH } from '@/constants';
import React from 'react';

import * as S from '../sider/index.styles';

interface SiderLogoProps {
  isSiderCollapsed: boolean;
  toggleSider: () => void;
}
export const SiderLogo: React.FC<SiderLogoProps> = () => {
  return (
    <S.SiderLogoDiv>
      <S.SiderLogoLink href={ROUTER_PATH.DASHBOARD}>
        <IconLogo />
      </S.SiderLogoLink>
      {/* {tabletOnly && (
        <S.CollapseButton
          shape="circle"
          size="small"
          $isCollapsed={isSiderCollapsed}
          icon={<RightOutlined rotate={isSiderCollapsed ? 0 : 180} />}
          onClick={toggleSider}
        />
      )} */}
    </S.SiderLogoDiv>
  );
};
