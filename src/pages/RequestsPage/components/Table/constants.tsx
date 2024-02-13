import { GetFlightsType } from '@models/flights.ts';
import { formatDate } from '@helpers/FormatDate/formatDate.ts';
import { DeleteOutlined } from '@ant-design/icons';
import './style.css';
import { Tag } from 'antd';
import { generatePath, useNavigate } from 'react-router-dom';
import routes from '@routes/routes.ts';
import { convertFlightClass } from '@helpers/FlightClass';

export const useTableColumns = () => {
  const navigate = useNavigate();
  return [
    {
      key: '1',
      title: 'Request Created',
      render: (_: unknown, record: GetFlightsType) => {
        return <span>{formatDate(record.created_at)}</span>;
      },
      width: '9%',
    },
    {
      key: '2',
      title: 'Lead ID',
      render: (_: unknown, record: GetFlightsType) => {
        return (
          <span
            className="cursor-pointer"
            onClick={() =>
              navigate(
                generatePath(routes.authenticated.assignedFlights, {
                  id: record.id,
                  page: 'flight-details',
                }),
              )
            }
          >
            {record.id}
          </span>
        );
      },
      width: '5%',
    },
    {
      key: '3',
      title: 'Customer Name',
      width: '7%',
      render: (_: unknown, record: GetFlightsType) => {
        return <span>{`${record.client.first_name} ${record.client.last_name}`}</span>;
      },
    },
    {
      key: '4',

      title: 'Trip Type',
      render: (_: unknown, record: GetFlightsType) => {
        return <span>{`${record.details.length > 1 ? 'RT' : 'OW'}`}</span>;
      },
      width: '5%',
    },
    {
      key: '5',
      title: 'Request Details',
    },
    {
      key: '6',
      title: 'Cabin',
      width: '7%',
      render: (_: unknown, record: GetFlightsType) => {
        return convertFlightClass[record.details[0].flight_class];
      },
    },
    {
      key: '7',
      title: 'Marketing Type',
      render: (_: unknown, record: GetFlightsType) => {
        return record.marketing_source;
      },
      width: '7%',
    },
    {
      key: '8',
      title: 'Marketing Campaign',
      render: () => {
        return <span>No info</span>;
      },
      width: '8%',
    },
    {
      key: '8',
      title: 'Agent Name',
      width: '7%',
      render: (_: unknown, record: GetFlightsType) => {
        return <span>{record.user.name}</span>;
      },
    },
    {
      key: '9',
      title: 'Client Email',
      render: (_: unknown, record: GetFlightsType) => {
        return record.client.emails.map((el, index) => {
          return (
            <Tag color="green" key={index} className="mb-2">
              {el}
            </Tag>
          );
        });
      },
      width: '18%',
    },
    {
      key: '10',
      title: 'Client Phone',
      render: (_: unknown, record: GetFlightsType) => {
        return record.client.phones.map((el, index) => {
          return (
            <Tag color="geekblue" key={index} className="mb-2">
              {el}
            </Tag>
          );
        });
      },
    },
    {
      key: '11',
      title: ' ',
      render: () => {
        return <DeleteOutlined className="hover_icon" />;
      },
      width: '3%',
    },
  ];
};
