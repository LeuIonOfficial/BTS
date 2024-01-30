import { Input, InputProps } from 'antd';

const CustomInput = ({ label, type, ...props }: InputProps & { label: string }) => {
  return (
    <div className="flex w-full flex-col">
      <div className="text-[14px] ml-[3px]">{label}</div>
      {type === 'password' ? (
        <Input.Password {...props} className="text-[14px]" />
      ) : (
        <Input {...props} className="text-[14px]" />
      )}
    </div>
  );
};

export default CustomInput;
