import { marketingSource } from '@helpers/MarketingSource';
import useGetUsers from '@hooks/useGetUsers.ts';
import { DatePicker, Select } from 'antd';

export const useFilterFields = () => {
  const { users } = useGetUsers(1, 10);
  const { RangePicker } = DatePicker;
  return [
    {
      label: 'Date',
      name: 'date',
      className: 'my-0 mx-3',
      render: <RangePicker style={{ width: '250px' }} />,
    },
    {
      label: 'Agent',
      name: 'agent',
      className: 'my-0 mx-3',
      render: (
        <Select
          style={{ width: '150px' }}
          options={users?.data?.map(({ name }: { name: string }) => {
            return { label: name, value: name };
          })}
        />
      ),
    },
    {
      label: 'Marketing Source',
      name: 'marketing_source',
      className: 'my-0 mx-3',
      render: (
        <Select
          style={{ width: '150px' }}
          options={marketingSource.map((el) => ({ name: el, value: el }))}
        />
      ),
    },
  ];
};
