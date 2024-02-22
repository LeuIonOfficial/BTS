import { Col, Form, FormInstance, Row } from 'antd';
import Header from './Header.tsx';
import Dump from './Dump.tsx';
import Cabin from './Cabin.tsx';
import ProgramType, { MilesPrice } from './ConditionalRender/ProgramType.tsx';
import SaleType from './SaleType.tsx';
import FareType from './ConditionalRender/FareType.tsx';
import { useQueryClient } from '@tanstack/react-query';
import { GetFlightsType } from '@models/flights.ts';
import { AxiosResponse } from 'axios';
import { useState } from 'react';
import Comments from './Comments.tsx';
import useGetDump from '@hooks/useGetDump.ts';
import MileageType from './ConditionalRender/MileageType.tsx';
import { removeDublicates } from '../constants.ts';
import MixTypeCalculations from './ConditionalRender/MixTypeCalculations.tsx';

const PQForm = ({ form }: { form: FormInstance }) => {
  const [programType, setProgramType] = useState<MilesPrice>({});
  const { postGetDump, response } = useGetDump();
  const flight: GetFlightsType = useQueryClient().getQueryData<AxiosResponse>(['flightDetails'])
    ?.data.data;

  const dataForMixType = removeDublicates(programType);

  return (
    <Form className="flex flex-col gap-y-2" form={form} onFinish={(values) => console.log(values)}>
      <Row gutter={[12, 12]}>
        <Col span={24}>{<Header />}</Col>
      </Row>
      <Row gutter={[12, 12]}>
        <Col span={12}>
          <Dump flightId={flight.id} postGetDump={postGetDump} form={form} />
        </Col>
        <Col span={6}>{response?.data?.length > 0 && <Cabin dataFromDump={response?.data} />}</Col>
        <Col span={6}>
          {response?.data && (
            <ProgramType dataFromDump={response.data} setProgramType={setProgramType} />
          )}
        </Col>
      </Row>
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <SaleType />
        </Col>
      </Row>

      <FareType />
      <MileageType />
      <MixTypeCalculations data={dataForMixType} />

      <Row gutter={[12, 12]}>
        <Col span={24}>
          <Comments />
        </Col>
      </Row>
    </Form>
  );
};
export default PQForm;
