import { GetFlightsType } from '@models/flights.ts';
import { Avatar, Badge, Divider, Tag } from 'antd';
import { formatDate } from '@helpers/FormatDate/formatDate.ts';
import { convertFlightClass } from '@helpers/FlightClass';
import { UserOutlined } from '@ant-design/icons';
import { Fragment } from 'react';

const FlightDetailsSection = (props: { flightDetails: GetFlightsType }) => {
  const { details } = { ...props.flightDetails };

  return (
    <div className="flex space-x-4 items-center">
      <div className="flex space-x-4">
        <Badge count={details.length} color="blue">
          <Avatar shape="circle" size="large" style={{ backgroundColor: '#059e9b', color: '#fff' }}>
            {details.length > 1 ? 'RT' : 'OW'}
          </Avatar>
        </Badge>
        <Badge count={1} color="blue">
          <Avatar shape="circle" size="large" style={{ backgroundColor: '#059e9b', color: '#fff' }}>
            <UserOutlined />
          </Avatar>
        </Badge>
      </div>
      {details.map((flight, index) => (
        <Fragment key={index}>
          <Divider type="vertical" className="h-[30px] font-xl" />
          <div className="flex">
            <Tag color="geekblue-inverse" className="h-[25px]">
              {flight.from.iata_code} - {flight.to.iata_code}
            </Tag>
            <Tag color="geekblue" className="h-[25px]">
              {formatDate(flight.departure_date)}
            </Tag>
            <Divider type="vertical" className="h-[30px] font-xl" />
            <div>{convertFlightClass[flight.flight_class]}</div>
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default FlightDetailsSection;
