import { Button, Form } from 'antd';
import FormItem from 'antd/es/form/FormItem';
import { useFilterFields } from './constants.tsx';

const SalesFilter = () => {
  const filterFields = useFilterFields();
  return (
    <div className="mx-[15px]">
      <Form colon={false}>
        <div className="flex flex-col xl:flex-row justify-between items-end gap-4 ">
          {filterFields.map((el, index) => {
            return (
              <FormItem key={index} label={el.label} name={el.name} className={el.className}>
                {el.render}
              </FormItem>
            );
          })}
          <FormItem className="my-0 mx-3">
            <Button type="primary" htmlType="submit" className="submit-button">
              Submit
            </Button>
          </FormItem>
        </div>
      </Form>
    </div>
  );
};

export default SalesFilter;
