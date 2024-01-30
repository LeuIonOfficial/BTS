import { ClientRequest, FlightDetails, FollowUp, PriceQuote } from './pages';
import { GetFlightsType } from '@models/flights.ts';
import { useQueryClient } from '@tanstack/react-query';
import { AxiosResponse } from 'axios';
import { Empty, FloatButton } from 'antd';
import { useState } from 'react';
import { RequestDrawer } from '../../../RequestsPage/components';
import { PlusOutlined } from '@ant-design/icons';

export const useGetPageObject: () => {
  'follow-up': JSX.Element;
  'client-request': JSX.Element;
  'flight-details': JSX.Element;
  'price-quote': JSX.Element;
} = () => {
  const queryClient = useQueryClient();
  const flight: GetFlightsType = queryClient.getQueryData<AxiosResponse>(['flightDetails'])?.data
    .data;
  const client = queryClient.getQueryData<AxiosResponse>(['client'])?.data.data;
  const [drawerState, setDrawerState] = useState<boolean>(false);

  return {
    'flight-details': (
      <>
        {flight! ? (
          flight.details.flights.map((element, index: number) => {
            return (
              <FlightDetails
                flightDetails={flight?.details}
                key={index}
                index={index + 1}
                flights={element}
              />
            );
          })
        ) : (
          <div className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
            <Empty />
          </div>
        )}

        <RequestDrawer open={drawerState} setDrawerState={setDrawerState} clientDetails={client} />
        <FloatButton
          type="primary"
          shape="circle"
          className="float-button"
          onClick={() => {
            setDrawerState(true);
          }}
          icon={
            <div className="flex items-center justify-center ">
              <PlusOutlined className="text-[20px] m-0 p-0" />
            </div>
          }
        />
      </>
    ),
    'client-request': <ClientRequest />,
    'price-quote': <PriceQuote />,
    'follow-up': <FollowUp />,
  };
};

export const useTabs = (): { name: string; href: string; key: string }[] => {
  return [
    {
      key: '1',
      name: 'Client Request',
      href: 'client-request',
    },
    { name: 'Flight Details', href: 'flight-details', key: '2' },
    { name: 'Price Quote', href: 'price-quote', key: '3' },
    { name: 'Follow Up', href: 'follow-up', key: '4' },
  ];
};

export function classNames(...classes: string[]) {
  return classes.filter(Boolean).join(' ');
}
