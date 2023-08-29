import { ButtonProps, Button } from "antd";
import styled from "styled-components";

const StyledButton = styled(Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  align-self: center;
  gap: 0.5rem;
  background: #059e9b;
  color: white;
  width: 100%;
`;

const SubmitButton = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default SubmitButton;
