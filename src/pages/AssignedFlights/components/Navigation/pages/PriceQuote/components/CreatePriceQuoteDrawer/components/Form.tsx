import { Col, Form, FormInstance, Input, Row } from 'antd';
import Header from './Header.tsx';
import Dump from './Dump.tsx';
import Cabin from './Cabin.tsx';
import ProgramType from './ConditionalRender/ProgramType.tsx';
import SaleType from './SaleType.tsx';
import FareType from './ConditionalRender/FareType.tsx';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import { GetFlightsType } from '@models/flights.ts';
import { AxiosResponse } from 'axios';
import { useEffect, useMemo, useState } from 'react';
import Comments from './Comments.tsx';
import useGetDump from '@hooks/useGetDump.ts';

const PQForm = ({ form }: { form: FormInstance }) => {
  const queryClient = useQueryClient();
  const { postGetDump, response } = useGetDump();
  const flight: GetFlightsType = queryClient.getQueryData<AxiosResponse>(['flightDetails'])?.data
    .data;
  const passengers = useMemo(() => {
    return {
      adults: flight?.details[0]?.adults,
      child: flight?.details[0]?.child,
      infants: flight?.details[0]?.adults,
    };
  }, [flight]);

  return (
    <Form className="flex flex-col gap-y-2" form={form} onFinish={(values) => console.log(values)}>
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <Header passengers={passengers} />
        </Col>
      </Row>
      <Row gutter={[12, 12]}>
        <Col span={12}>
          <Dump flightId={flight.id} postGetDump={postGetDump} />
        </Col>
        <Col span={6}>{response?.data && <Cabin dataFromDump={response.data} />}</Col>
        <Col span={6}>
          <ProgramType />
        </Col>
      </Row>
      <Row gutter={[12, 12]}>
        <Col span={24}>
          <SaleType />
        </Col>
      </Row>

      <FareType passengers={passengers} />

      <Row gutter={[12, 12]}>
        <Col span={24}>
          <Comments />
        </Col>
      </Row>
    </Form>
  );
};
export default PQForm;
