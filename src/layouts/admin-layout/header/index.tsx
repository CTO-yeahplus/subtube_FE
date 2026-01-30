import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useRouter } from 'next/router';
import { Drawer, Menu, Button, ConfigProvider } from 'antd';
import type { MenuProps } from 'antd';
import { MenuOutlined, DownOutlined } from '@ant-design/icons';
import { useTranslation } from 'next-i18next';

// === 스타일 ===
const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  padding: 0 24px;
  max-width: 1400px;
  margin: 0 auto;

  /* Antd Menu 커스텀 (투명 배경, 밑줄 제거) */
  .ant-menu {
    background: transparent;
    border-bottom: none;
    width: 100%;
    justify-content: flex-end;
    font-size: 15px;
    font-weight: 500;
  }
`;

const Logo = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #1d1d1f;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 8px;
  min-width: 120px; /* 로고 영역 확보 */
`;

const DesktopMenuWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-end;
  
  @media (max-width: 768px) {
    display: none;
  }
`;

const MobileMenuBtn = styled(Button)`
  display: none;
  @media (max-width: 768px) {
    display: block;
  }
`;

// === 컴포넌트 ===
const Header = () => {
  const router = useRouter();
  const { t } = useTranslation('common');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [currentKey, setCurrentKey] = useState(router.pathname);

  useEffect(() => {
    setCurrentKey(router.pathname);
  }, [router.pathname]);

  // ✅ 메뉴 구조 전면 수정
  const menuItems: MenuProps['items'] = [
    {
      label: 'Cloud Software',
      key: 'cloud-software',
      icon: <DownOutlined style={{ fontSize: 10 }} />,
      children: [
        {
          label: 'YouTube Accounts',
          key: '/cloud-software/youtube-accounts', 
        },
        {
          label: 'Translator',
          key: '/cloud-software/translator', 
        },
        {
          label: 'CaptionMaster',
          key: '/cloud-software/captionizer', // 파일명 주의 (captionizer.tsx 인지 확인 필요)
        },
      ],
    },
    {
      label: 'My Profile', // 기존 Users/Settings 대신 My Profile로 통합
      key: 'my-profile',
      icon: <DownOutlined style={{ fontSize: 10 }} />,
      children: [
        {
          label: 'Personal Info',
          key: '/my-profile/personal-info', 
        },
        {
          label: 'Security Settings',
          key: '/my-profile/security-settings', 
        },
        {
          label: 'Payment History',
          key: '/my-profile/payment-history', 
        },
      ],
    },
  ];

  // 메뉴 클릭 핸들러
  const handleMenuClick: MenuProps['onClick'] = (e) => {
    // 하위 메뉴 그룹(key에 '/'가 없는 것) 클릭 시 이동 방지
    if (e.key && e.key.startsWith('/')) {
      router.push(e.key);
      setMobileMenuOpen(false);
    }
  };

  return (
    <HeaderContainer>
      {/* 1. 로고 */}
      <Logo onClick={() => router.push('/')}>
        SubTube
      </Logo>

      {/* 2. 데스크탑 메뉴 (Horizontal) */}
      <DesktopMenuWrapper>
        <ConfigProvider
          theme={{
            components: {
              Menu: {
                itemColor: '#424245',
                itemHoverColor: '#0071e3',
                itemSelectedColor: '#0071e3',
                horizontalItemSelectedColor: '#0071e3', // 선택된 항목 색상
                activeBarHeight: 2, // 밑줄 두께
              },
            },
          }}
        >
          <Menu 
            mode="horizontal" 
            selectedKeys={[currentKey]} 
            items={menuItems} 
            onClick={handleMenuClick}
            triggerSubMenuAction="hover" // 마우스 올리면 열림
          />
        </ConfigProvider>
      </DesktopMenuWrapper>

      {/* 3. 모바일 햄버거 버튼 */}
      <MobileMenuBtn 
        icon={<MenuOutlined />} 
        type="text" 
        size="large"
        onClick={() => setMobileMenuOpen(true)}
      />

      {/* 4. 모바일 드로어 */}
      <Drawer
        title="Menu"
        placement="right"
        onClose={() => setMobileMenuOpen(false)}
        open={mobileMenuOpen}
        width={280}
        bodyStyle={{ padding: 0 }}
      >
        <Menu
          mode="inline" // 모바일은 세로로 펼쳐짐
          selectedKeys={[currentKey]}
          items={menuItems}
          onClick={handleMenuClick}
          style={{ borderRight: 'none' }}
        />
      </Drawer>
    </HeaderContainer>
  );
};

export default Header;