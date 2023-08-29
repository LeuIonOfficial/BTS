import { FC } from "react";
import { LoginForm } from "./components";
import { Container, Logo, Subtitle } from "./styles.ts";

const LoginPage: FC = () => {
  return (
    <Container>
      <Logo>BTS</Logo>
      <Subtitle>Welcome to Business Tickets</Subtitle>
      <LoginForm />
    </Container>
  );
};

export default LoginPage;
