import { EditOutlined, UserOutlined } from '@ant-design/icons';
import { Checkbox, Select, Tag } from 'antd';

const ClientInfo = (props: {
  clientDetails:
    | {
        id: number;
        first_name: string;
        last_name: string;
        is_return: boolean;
        emails: string[];
        phones: string[];
      }
    | undefined;
  userDetails: { name: string } | undefined;
}) => {
  const { emails = [], phones = [], last_name, first_name } = {
    ...props.clientDetails,
  };
  const { name } = {
    ...props.userDetails,
  };
  const emailOptions = emails?.map((email) => ({
    label: email,
    value: email,
  }));
  const phoneOptions = phones?.map((phone) => ({
    label: phone,
    value: phone,
  }));

  return (
    <div className="flex justify-between items-center">
      {props.clientDetails! ? (
        <div className="flex flex-col xl:flex-row gap-4">
          <div className="space-x-4">
            <UserOutlined />
            <span>{first_name + ' ' + last_name}</span>
          </div>
          <Select className="w-[200px]" options={emailOptions} defaultValue={emails[0]} />
          <Select className="w-[200px]" options={phoneOptions} defaultValue={phones[0]} />
          <EditOutlined className="" />
        </div>
      ) : (
        <Tag color="error">Failed to load data</Tag>
      )}
      <Checkbox>Conversion</Checkbox>
      {name! && (
        <Tag color={'default'} className="text-sm">
          {name}
        </Tag>
      )}
    </div>
  );
};

export default ClientInfo;
