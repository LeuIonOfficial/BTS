import { PriceQuoteType } from '@models/priceQuote.ts';
import TextArea from 'antd/es/input/TextArea';
import { Button, Switch } from 'antd';

export const useTableColumns = () => {
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
    },
    {
      key: '3',
      title: 'Reservation Dump',
      render: (_: unknown, record: PriceQuoteType) => {
        console.log(record);
        return <TextArea autoSize value={record?.dump} readOnly />;
      },
      width: '30%',
    },
    {
      key: '4',
      title: 'Actions',
      render: () => {
        return (
          <div className="flex flex-col gap-y-2 items-center w-[100px]">
            <Button type="default" className="w-full">
              Sale Record
            </Button>
            <Button type="primary" className="submit-button" danger>
              Send PQ
            </Button>
            <Button type="primary" color="blue" className="submit-button">
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
