import routes from "@routes/routes.ts";
import { Button, Result } from "antd";
import { useNavigate } from "react-router-dom";

const BadRequest = () => {
  const navigate = useNavigate();



  
  
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <Result
        status="500"
        title="500"
        subTitle="Sorry, something went wrong."
        extra={
          <Button
            type="primary"
            className="submit-button"
            onClick={() => navigate(routes.authenticated.requests)}
          >
            Back Home
          </Button>
        }
      />
    </div>
  );
};

export default BadRequest;
