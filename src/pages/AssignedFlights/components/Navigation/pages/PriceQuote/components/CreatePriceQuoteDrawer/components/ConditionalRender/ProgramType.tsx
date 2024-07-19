import { Form, Select } from 'antd';
import { useEffect, useState } from 'react';
import useGetMilesPrices from '@hooks/useGetMilesPrices.ts';
import { SALETYPE } from '../../constants.ts';

interface ProgramTypeProps {
  dataFromDump: any[]; // Replace with the appropriate type
  setProgramType: React.Dispatch<React.SetStateAction<MilesPrice>>; // Replace with the appropriate type
}

export interface MilesPrice {
  label?: string;
  name?: string;
  price?: number;
  value?: string;
}

const ProgramType: React.FC<ProgramTypeProps> = ({ dataFromDump, setProgramType }) => {
  const data = useGetMilesPrices().data as MilesPrice[] | undefined;
  const [options, setOptions] = useState<MilesPrice[]>([]);

  useEffect(() => {
    if (data) {
      const selectOptions = data.map((el: MilesPrice) => ({
        label: el.name,
        value: el.name,
        price: el.price,
      }));
      setOptions([{ label: 'Revenue Option', value: 'Revenue Option' }, ...selectOptions]);
    }
  }, [data]);

  const handleSelect = (option: any, key: number) => {
    setProgramType((prev) => {
      return { ...prev, [key]: option };
    });
  };

  return (
    <Form.Item
      noStyle
      shouldUpdate={(prevValues, currentValues) =>
        prevValues['sale-type'] !== currentValues['sale-type']
      }
    >
      {({ getFieldValue }) =>
        getFieldValue('sale-type' as any) === SALETYPE.MIX ? (
          <div className="flex items-center justify-center flex-col gap-y-4">
            <h1>Program Type</h1>
            {dataFromDump?.map((_, key) => (
              <Form.Item noStyle name={_.name} key={key}>
                <Select
                  style={{ minWidth: '200px' }}
                  options={options}
                  onSelect={(_, option) => handleSelect(option, key)}
                ></Select>
              </Form.Item>
            ))}
          </div>
        ) : null
      }
    </Form.Item>
  );
};

export default ProgramType;
