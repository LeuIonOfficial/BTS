import styled from "styled-components";
import { Button, ButtonProps } from "antd";

const StyledButton = styled(Button)`
  color: #059e9b;
`;

const TextButton = (props: ButtonProps) => {
  return <StyledButton {...props}>{props.children}</StyledButton>;
};

export default TextButton;
