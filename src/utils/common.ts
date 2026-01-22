import { BaseBadgeProps } from '@/components/common/base-badge';
import { NotificationType } from '@/components/common/base-notification';
import { Priority } from '@/constants';
import { currencies } from '@/constants';
import { CurrencyTypeEnum, LEVEL_USER, Severity } from '@/interfaces';
import countryLanguage from '@ladjs/country-language';
import dayjs from 'dayjs';

export const camelize = (string: string): string => {
  return string
    .split(' ')
    .map((word, index) =>
      index === 0 ? word.toLowerCase() : word[0].toUpperCase() + word.slice(1)
    )
    .join('');
};

export const getCurrencyPrice = (
  price: number | string,
  currency: CurrencyTypeEnum,
  isIcon = true
): string => {
  const currencySymbol = currencies[currency][isIcon ? 'icon' : 'text'];

  return isIcon ? `${currencySymbol}${price}` : `${price} ${currencySymbol}`;
};

type MarkArea = {
  xAxis: number;
};

export const getMarkAreaData = (data: string[] | number[]): MarkArea[][] =>
  data.map((el, index) => [
    {
      xAxis: 2 * index,
    },
    {
      xAxis: 2 * index + 1,
    },
  ]);

export const capitalize = (word: string): string => `${word[0].toUpperCase()}${word.slice(1)}`;

export const hexToRGB = (hex: string): string => {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  return `${r}, ${g}, ${b}`;
};

export const getDifference = (value: number, prevValue: number): string | null =>
  prevValue !== 0 ? `${((Math.abs(value - prevValue) / prevValue) * 100).toFixed(0)}%` : '100%';

export const normalizeProp = (prop: string | number | [number, number]): string =>
  typeof prop === 'number'
    ? `${prop}px`
    : (Array.isArray(prop) && `${prop[0]}px ${prop[1]}px`) || prop.toString();

export const defineColorByPriority = (priority: Priority): string => {
  switch (priority) {
    case Priority.INFO:
      return 'var(--primary-color)';
    case Priority.LOW:
      return 'var(--success-color)';
    case Priority.MEDIUM:
      return 'var(--warning-color)';
    case Priority.HIGH:
      return 'var(--error-color)';
    default:
      return 'var(--success-color)';
  }
};

export const defineColorBySeverity = (
  severity: NotificationType | undefined,
  rgb = false
): string => {
  const postfix = rgb ? 'rgb-color' : 'color';
  switch (severity) {
    case 'error':
    case 'warning':
    case 'success':
      return `var(--${severity}-${postfix})`;
    case 'info':
    default:
      return `var(--primary-${postfix})`;
  }
};

export const mergeBy = (a: any[], b: any[], key: string): any[] =>
  a.filter((elem) => !b.find((subElem) => subElem[key] === elem[key])).concat(b);

export const getSmoothRandom = (factor: number, start: number): number => {
  const halfEnvelope = 1 / factor / 2;
  const max = Math.min(1, start + halfEnvelope);
  const min = Math.max(0, start - halfEnvelope);

  return Math.random() * (max - min) + min;
};

export const shadeColor = (color: string, percent: number): string => {
  let R = parseInt(color.substring(1, 3), 16);
  let G = parseInt(color.substring(3, 5), 16);
  let B = parseInt(color.substring(5, 7), 16);

  R = parseInt(((R * (100 + percent)) / 100).toString());
  G = parseInt(((G * (100 + percent)) / 100).toString());
  B = parseInt(((B * (100 + percent)) / 100).toString());

  R = R < 255 ? R : 255;
  G = G < 255 ? G : 255;
  B = B < 255 ? B : 255;

  const RR = R.toString(16).length == 1 ? '0' + R.toString(16) : R.toString(16);
  const GG = G.toString(16).length == 1 ? '0' + G.toString(16) : G.toString(16);
  const BB = B.toString(16).length == 1 ? '0' + B.toString(16) : B.toString(16);

  return '#' + RR + GG + BB;
};

export const hexToHSL = (hex: string): { h: number; s: number; l: number } => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);

  if (result) {
    let r = parseInt(result[1], 16);
    let g = parseInt(result[2], 16);
    let b = parseInt(result[3], 16);
    (r /= 255), (g /= 255), (b /= 255);
    const max = Math.max(r, g, b),
      min = Math.min(r, g, b);
    let h, s;
    const l = (max + min) / 2;
    if (max == min) {
      h = s = 0; // achromatic
    } else {
      const d = max - min;
      s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
      switch (max) {
        case r:
          h = (g - b) / d + (g < b ? 6 : 0);
          break;
        case g:
          h = (b - r) / d + 2;
          break;
        case b:
          h = (r - g) / d + 4;
          break;
        default:
          h = 0;
      }
      h /= 6;
    }
    return {
      h,
      s,
      l,
    };
  } else {
    throw new Error('Non valid HEX color');
  }
};

export const formatNumberWithCommas = (value: number): string => {
  const isDecimal = Boolean(Number(value.toString().split('.')[1]));

  if (!isDecimal) {
    const numStr = value?.toString().split('.')[0];
    return numStr.replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  const numStr = value?.toString().split('.');
  numStr[0] = numStr[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  return numStr.join('.');
};
export const msToH = (ms: number): number => Math.floor(ms / 3600000);

export const hToMS = (h: number): number => h * 3600000;

export const mapBadgeStatus = (status: BaseBadgeProps['status']): Severity => {
  if (!status || status === 'default' || status === 'processing') {
    return 'info';
  }

  return status;
};

export const _renderLevelUser = (level: string) => {
  const upperCaseLevel = level.toUpperCase();

  switch (upperCaseLevel) {
    case LEVEL_USER.BRONZE:
      return { level: LEVEL_USER.BRONZE, count: 1 };
    case LEVEL_USER.SILVER:
      return { level: LEVEL_USER.SILVER, count: 5 };
    default:
      return { level: LEVEL_USER.BRONZE, count: 1 };
  }
};

export const formatCardNumber = (str: string) => {
  if (!str) return '';
  return str.replace(/(\d{4})(?=\d)/g, '$1 ');
};

export const fromLangCodeToCountryCode = (langCode: string) => {
  let countryCode = null;

  try {
    const countries = countryLanguage.getLanguageCountries(langCode);

    switch (langCode) {
      case 'en':
        countryCode = 'GB';
        break;
      case 'zh-CN':
      case 'zh-TW':
      case 'zh':
        countryCode = 'CN';
        break;
      case 'ko':
        countryCode = 'KR';
        break;
      case 'es':
        countryCode = 'ES';
        break;
      default:
        countries?.every((item) => {
          if (
            item.code_2.charAt(0).toLocaleLowerCase() === langCode.charAt(0).toLocaleLowerCase()
          ) {
            countryCode = item.code_2;
            return false;
          } else {
            return true;
          }
        });
        if (countryCode === null && countries?.length) countryCode = countries[0].code_2;
        break;
    }
  } catch (err) {
    countryCode = null;
  }
  return countryCode;
};

export const formatFrame = (rawTime: string) => {
  try {
    const times = rawTime.split('.');
    const timeString = times[0];
    const milisecond = times[1];
    const timeBreaks = timeString.split(':');
    const hours = timeBreaks[0];
    const minutes = timeBreaks[1];
    const sencond = timeBreaks[2];

    const frame = Math.ceil(parseInt(milisecond) * 0.03);
    const frameString = (frame < 10 ? '0' : '') + frame.toString();

    if (hours === '00') {
      return `${minutes}:${sencond}:${frameString}`;
    }
    return `${hours}:${minutes}:${sencond}:${frameString}`;
  } catch (err) {
    return '';
  }
};

export const htmlDecode = (input: string) => {
  try {
    // eslint-disable-next-line no-useless-escape
    const removeBreakLineTag = input?.replace(/<br\s*[\/]?>/gi, '\n') ?? '';
    var doc = new DOMParser().parseFromString(removeBreakLineTag, 'text/html');
    return doc.documentElement.textContent;
  } catch (err) {
    return '';
  }
};

export const checkExpiredDate = (date: string) => {
  return dayjs().isAfter(dayjs(date, 'day'));
};

export const checkDateBeforeExpired = (expire_date: string, day: number) => {
  const currentDate = dayjs();
  const remainingTime = dayjs(expire_date).diff(currentDate, 'second');
  return remainingTime > 0 && remainingTime < day * 24 * 60 * 60;
};

export const checkDateAfterExpired = (expire_date: string, day: number) => {
  const currentDate = dayjs();
  const remainingTime = dayjs(currentDate).diff(expire_date, 'second');
  return remainingTime > 0 && remainingTime < day * 24 * 60 * 60;
};

export const sleep = (milliseconds: number) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};
