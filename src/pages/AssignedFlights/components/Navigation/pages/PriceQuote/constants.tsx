import { PriceQuoteType } from '@models/priceQuote.ts';
import TextArea from 'antd/es/input/TextArea';
import { Button, FormInstance, Switch } from 'antd';
import { Dispatch, SetStateAction } from 'react';
import { DrawerState } from '.';

export const useTableColumns = (
  setDrawerState: Dispatch<SetStateAction<DrawerState>>,
  form: FormInstance,
) => {
  return [
    {
      key: '1',
      title: 'Info',
      width: '20%',
    },
    {
      key: '2',
      title: 'Prices',
      width: '20%',
      render: (_: unknown, record: PriceQuoteType) => {
        return <ul></ul>;
      },
    },
    {
      key: '3',
      title: 'Reservation Dump',
      render: (_: unknown, record: PriceQuoteType) => {
        return (
          <TextArea
            onDoubleClick={(event) => (event.target as HTMLInputElement).select()}
            autoSize
            value={record?.dump}
            readOnly
          />
        );
      },
      width: '30%',
    },
    {
      key: '4',
      title: 'Actions',
      render: (_: unknown, record: PriceQuoteType) => {
        return (
          <div className="flex flex-col gap-y-2 items-center w-[100px]">
            <Button type="default" className="w-full">
              Sale Record
            </Button>
            <Button type="primary" className="submit-button" danger>
              Send PQ
            </Button>
            <Button
              type="primary"
              color="blue"
              className="submit-button"
              onClick={() => {
                const adults = !!record.details[0].adults;
                const child = !!record.details[0].child;
                const infants = !!record.details[0].infants;
                setDrawerState('update'),
                  form.setFieldsValue({
                    dump: record.dump,
                    'sale-type': record.packageable.name,
                    'fare-type': record.packageable.fare_type,
                    adults: adults && record.details[0].adults,
                    child: child && record.details[0].child,
                    infants: infants && record.details[0].infants,
                    total_fare_price: record.packageable.total_fare_price,
                    total_fare_price_adult: record.packageable.total_fare_price_adult,
                    total_fare_price_child: record.packageable.total_fare_price_child,
                    total_fare_price_infant: record.packageable.total_fare_price_infant,
                  });
              }}
            >
              Clone PQ
            </Button>
            <Switch style={{ width: '50px' }} className="bg-gray-400" />
          </div>
        );
      },
      width: '10%',
    },
  ];
};
