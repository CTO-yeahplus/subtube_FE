import { Header } from '@/components/header';
import PlanModal from '@/components/modals/modal-plan';
import ReminderModal from '@/components/modals/modal-reminder';
import dynamic from 'next/dynamic';
import React, { useState } from 'react';

import MainContent from './content';
import * as S from './index.styles';

const MainHeader = dynamic(() => import('./header'), { ssr: false });
const MainFooter = dynamic(() => import('./footer'), { ssr: false });
const MainSider = dynamic(() => import('./sider'), { ssr: false });

interface AppLayoutProps {
  children: React.ReactNode;
}

const AppLayout = ({ children }: AppLayoutProps) => {
  const [isTwoColumnsLayout] = useState(false);
  const [siderCollapsed, setSiderCollapsed] = useState(true);

  const toggleSider = () => setSiderCollapsed(!siderCollapsed);

  return (
    <S.LayoutMaster>
      <MainSider isCollapsed={siderCollapsed} setCollapsed={setSiderCollapsed} />
      <S.LayoutMain>
        <MainHeader isTwoColumnsLayout={isTwoColumnsLayout}>
          <Header
            toggleSider={toggleSider}
            isSiderOpened={!siderCollapsed}
            isTwoColumnsLayout={isTwoColumnsLayout}
          />
        </MainHeader>
        <MainContent id="main-content" $isTwoColumnsLayout={isTwoColumnsLayout}>
          <div>{children}</div>
        </MainContent>
        <MainFooter />
      </S.LayoutMain>

      <PlanModal />
      <ReminderModal />
    </S.LayoutMaster>
  );
};

export default AppLayout;
