import { CabinType } from '@helpers/FlightClass';
import useGetMilesPrices from '@hooks/useGetMilesPrices.ts';
import { MilesPrice } from './components/ConditionalRender/ProgramType';

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

export const select = ['mock data', 'mock data', 'mock data', 'mock data'];

export const removeDublicates = (data: MilesPrice) => {
  // Convert to array to filter
  const dataArray = Object.values(data);

  // Filter out duplicates by value
  const uniqueByValue = dataArray.reduce((acc: MilesPrice[], current: MilesPrice) => {
    const x = acc.find((item: MilesPrice) => item.value === current.value);
    if (!x) {
      return [...acc, current];
    } else {
      return acc;
    }
  }, []);

  return uniqueByValue;
};
