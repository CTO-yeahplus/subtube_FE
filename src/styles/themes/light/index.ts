import { BASE_COLORS } from '@/constants';
import { shadeColor } from '@/utils';

export const lightColorsTheme = {
  // Apple Style Blue (Action Color)
  primary: '#0071e3', 
  primary1: '#f5f5f7', // Apple Background Gray
  primaryGradient: 'linear-gradient(180deg, #0077ED 0%, #0071E3 100%)',
  
  // Semantic Colors
  secondary: '#06c',
  error: '#ff3b30',
  warning: '#ff9500',
  success: '#34c759',
  
  // Backgrounds
  background: '#ffffff',
  secondaryBackground: '#f5f5f7', // 섹션 구분을 위한 옅은 회색
  
  // Text
  textMain: '#1d1d1f', // 완전한 검정보다는 아주 짙은 회색
  textLight: '#86868b',
  subText: '#86868b',
  
  // UI Elements
  border: '#d2d2d7',
  shadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
  
  // Glassmorphism
  glassBg: 'rgba(255, 255, 255, 0.72)',
  glassBorder: 'rgba(255, 255, 255, 0.2)',

  light: '#C5D3E0',
  secondaryBackgroundSelected: shadeColor('#F8FBFF', -5),
  additionalBackground: '#ffffff',
  collapseBackground: 'rgb(0, 108, 207)',
  timelineBackground: '#F8FBFF',
  siderBackground: '#ffffff',
  spinnerBase: '#f42f25',
  scroll: '#c5d3e0',
  borderNft: '#79819A',
  textSuperLight: '#BEC0C6',
  textSecondary: BASE_COLORS.white,
  textDark: '#404040',
  textNftLight: '#79819A',
  textSiderPrimary: '#FFB765',
  textSiderSecondary: '#ffffff',
  boxShadow: '0 2px 8px 0 rgba(0, 0, 0, 0.07)',
  boxShadowHover: '0 4px 16px 0 rgba(0, 0, 0, 0.2)',
  boxShadowNft:
    '0px 16px 24px rgba(0, 0, 0, 0.06), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
  boxShadowNftSecondary:
    '0px 10px 20px rgba(0, 0, 0, 0.04), 0px 2px 6px rgba(0, 0, 0, 0.04), 0px 0px 1px rgba(0, 0, 0, 0.04)',
  dashboardMapBackground: '#EAF5FF',
  dashboardMapCircleColor: '#9BC2E7',
  dashboardMapControlDisabledBackground: '#c5d3e0',
  notificationSuccess: '#EFFFF4',
  notificationPrimary: '#D7EBFF',
  notificationWarning: '#FFF4E7',
  notificationError: '#FFE2E2',
  heading: '#13264d',
  borderBase: '#bec0c6',
  disable: 'rgba(0, 0, 0, 0.25)',
  disabledBg: '#c5d3e0',
  layoutBodyBg: '#f8fbff',
  layoutHeaderBg: 'transparent',
  layoutSiderBg: 'linear-gradient(261.31deg, #006ccf -29.57%, #00509a 121.11%)',
  inputPlaceholder: '#cccccc',
  itemHoverBg: '#f5f5f5',
  backgroundColorBase: '#F5F5F5',
  avatarBg: '#ccc',
  alertTextColor: BASE_COLORS.white,
  breadcrumb: 'rgba(0, 0, 0, 0.45)',
  icon: '#a9a9a9',
  iconHover: 'rgba(0, 0, 0, 0.75)',
};

export const antLightColorsTheme = {
  primary1: lightColorsTheme.primary1,
  primary2: '#85b3cc',
  primary3: '#5e9abf',
  primary4: '#3b81b3',
  primary5: '#01509A',
  primary6: '#01509a',
  primary7: '#003773',
  primary8: '#00224d',
  primary9: '#001026',
  primary10: '#000000',
};
