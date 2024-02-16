import { CabinType } from '@helpers/FlightClass';

export enum SALETYPE {
  REVENUE = 'Revenue',
  AWARD = 'Award',
  MIX = 'Mix',
}

export const saleTypeOptions = [
  {
    label: SALETYPE.REVENUE,
    value: SALETYPE.REVENUE,
  },
  {
    label: SALETYPE.AWARD,
    value: SALETYPE.AWARD,
  },
  {
    label: SALETYPE.MIX,
    value: SALETYPE.MIX,
  },
];

export enum FARETYPE {
  CK = 'CK',
  PUBLISHED = 'Published',
  PRIVATE = 'Private',
}

export const fareTypeOptions = [
  { label: FARETYPE.CK, value: FARETYPE.CK },
  { label: FARETYPE.PUBLISHED, value: FARETYPE.PUBLISHED },
  { label: FARETYPE.PRIVATE, value: FARETYPE.PRIVATE },
];

export const cabinTypeList = [
  CabinType.BUSINESS,
  CabinType.ECONOMY,
  CabinType.FIRST,
  CabinType.PREMIUM_ECONOMY,
];

export const select = ['', '', '', ''];
