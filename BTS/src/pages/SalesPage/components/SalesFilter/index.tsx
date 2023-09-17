import { Form } from "antd";
import FormItem from "antd/es/form/FormItem";
import { SubmitButton } from "@components/index.ts";
import { useFilterFields } from "./constants.tsx";

const SalesFilter = () => {
  const filterFields = useFilterFields();
  return (
    <div className="mx-[15px]">
      <Form colon={false}>
        <div className="flex flex-row justify-between items-center">
          {filterFields.map((el, index) => {
            return (
              <FormItem
                key={index}
                label={el.label}
                name={el.name}
                className={el.className}
              >
                {el.render}
              </FormItem>
            );
          })}
          <FormItem className="my-0 mx-3">
            <SubmitButton type="primary" htmlType="submit">
              Submit
            </SubmitButton>
          </FormItem>
        </div>
      </Form>
    </div>
  );
};

export default SalesFilter;
