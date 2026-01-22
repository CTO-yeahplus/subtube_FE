import { LEVEL_USER, Price } from '@/interfaces';

export const PRICE: Price = {
  [LEVEL_USER.BRONZE]: {
    currentPrice: 144,
    salePrice: 119,
  },
  [LEVEL_USER.SILVER]: {
    currentPrice: 360,
    salePrice: 299,
  },
  [LEVEL_USER.GOLD]: {
    currentPrice: 1188,
    salePrice: 989,
  },
};
