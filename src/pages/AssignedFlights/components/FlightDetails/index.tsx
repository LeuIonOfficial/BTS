import { GetFlightsType } from '@models/flights.ts';
import { Avatar, Badge, Divider, Tag } from 'antd';
import { formatDate } from '@helpers/FormatDate/formatDate.ts';
import { convertFlightClass } from '@helpers/FlightClass';
import { UserOutlined } from '@ant-design/icons';

const FlightDetails = (props: { flightDetails: GetFlightsType }) => {
  const info = { ...props.flightDetails?.details };

  if (info)
    return (
      <div className="flex space-x-4 items-center">
        <div className="flex space-x-4">
          <Badge count={info.flights.length} color="blue">
            <Avatar
              shape="circle"
              size="large"
              style={{ backgroundColor: '#059e9b', color: '#fff' }}
            >
              {info.direction}
            </Avatar>
          </Badge>

          <Badge count={+info.adults + +info.child + +info.infants} color="blue">
            <Avatar
              shape="circle"
              size="large"
              style={{ backgroundColor: '#059e9b', color: '#fff' }}
            >
              <UserOutlined />
            </Avatar>
          </Badge>
        </div>
        <Divider type="vertical" className="h-[30px] font-xl" />
        {info.flights.map((element, index) => (
          <div key={index}>
            <Tag color="geekblue-inverse" className="h-[25px]">
              {element.from.iata_code} - {element.to.iata_code}
            </Tag>
            <Tag color="geekblue" className="h-[25px]">
              {formatDate(element.departure_date)}
            </Tag>
            <Divider type="vertical" className="h-[30px] font-xl" />
          </div>
        ))}
        <div>{convertFlightClass[info.flight_class]}</div>
      </div>
    );

  return null;
};

export default FlightDetails;
