import { LoggedIn } from "../../layouts";
import { Result } from "antd";
import { useNavigate } from "react-router-dom";
import routes from "@routes/routes.ts";
import { SubmitButton } from "@components/index.ts";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <LoggedIn>
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <SubmitButton
            type="primary"
            onClick={() => navigate(routes.authenticated.root)}
          >
            Back Home
          </SubmitButton>
        }
      />
    </LoggedIn>
  );
};

export default NotFound;
