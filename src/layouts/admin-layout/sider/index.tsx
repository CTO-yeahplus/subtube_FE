import { useResponsive } from '@/hooks/useResponsive';
// useRouter, useEffect import 제거 가능 (여기선 안 씀)
import React from 'react';

import { SiderLogo } from '../sider-menu/SiderLogo'; 
import SiderMenu from '../sider-menu'; 
import * as S from './index.styles';

interface MainSiderProps {
  isCollapsed: boolean;
  setCollapsed: (isCollapsed: boolean) => void;
  isMobile?: boolean;
  style?: React.CSSProperties;
  className?: string;
}

const MainSider: React.FC<MainSiderProps> = ({ isCollapsed, setCollapsed, style, className, ...props }) => {
  const { isDesktop, isMobile: isMobileHook } = useResponsive(); 
  const isMobile = props.isMobile ?? isMobileHook; 
  
  const toggleSider = () => setCollapsed(!isCollapsed);

  // 🚨 이전에 있던 useEffect (setCollapsed 호출하던 부분)는 
  // AppLayout으로 이사 갔으니 여기서는 지워주세요!

  return (
    <S.Sider
      trigger={null}
      collapsed={isCollapsed}
      collapsedWidth={isMobile ? 0 : 80}
      width={isMobile ? 280 : 260}
      collapsible
      style={style} 
      className={`${isMobile ? 'mobile-sider' : ''} ${className || ''}`}
      {...props}
    >
      <SiderLogo 
        isSiderCollapsed={isMobile ? false : isCollapsed} 
        toggleSider={toggleSider} 
      />
      
      <S.SiderContent>
         <SiderMenu setCollapsed={setCollapsed} />
      </S.SiderContent>
    </S.Sider>
  );
};

export default MainSider;