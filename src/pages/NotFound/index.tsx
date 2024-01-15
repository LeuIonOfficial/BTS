import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";
import routes from "@routes/routes.ts";

const NotFound = () => {
  const navigate = useNavigate();
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <Result
        status="404"
        title="404"
        subTitle="Sorry, the page you visited does not exist."
        extra={
          <Button
            type="primary"
            className="submit-button"
            onClick={() => navigate(routes.authenticated.root)}
          >
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default NotFound;
