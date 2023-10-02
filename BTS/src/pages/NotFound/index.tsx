import { Result } from "antd";
import { useNavigate } from "react-router-dom";
import routes from "@routes/routes.ts";
import { SubmitButton } from "@components/index.ts";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-[100vh]">
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
    </div>
  );
};

export default NotFound;
