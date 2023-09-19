import { Input, InputProps } from "antd";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

const Label = styled.div`
  margin-left: 3px;
`;

const CustomInput = ({
  label,
  type,
  ...props
}: InputProps & { label: string }) => {
  return (
    <Container>
      <Label className="text-[14px]">{label}</Label>
      {type === "password" ? (
        <Input.Password {...props} className="text-[14px]" />
      ) : (
        <Input {...props} className="text-[14px]" />
      )}
    </Container>
  );
};

export default CustomInput;
