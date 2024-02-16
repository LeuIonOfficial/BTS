import { Select, Form } from 'antd';
import { cabinTypeList, select } from '../constants.ts';

const Cabin = ({ dataFromDump }: { data: any[] | undefined }) => {
  console.log(dataFromDump);
  return (
    <div className="flex items-center justify-center flex-col gap-y-4">
      <h1>Cabin</h1>
      {dataFromDump?.map((element, key) => (
        <Select
          defaultValue={element.flt.cabin}
          options={cabinTypeList.map((element) => ({ label: element, value: element }))}
          style={{ minWidth: '200px' }}
          key={key}
        />
      ))}
    </div>
  );
};

export default Cabin;
