import { IFlightDetails } from '@models/flights.ts';
import { Badge, Button, DatePicker, Input, Select } from 'antd';
import dayjs from 'dayjs';

const FlightDetailsPage = ({
  flightDetails,
  index,
}: {
  flightDetails: IFlightDetails;
  index: number;
}) => {
  const { adults, child, departure_date, iata_from, iata_to, infants, from, to } = flightDetails;
  return (
    <div className="overflow-hidden rounded-md bg-white px-6 py-4 shadow">
      <div className="px-4 flex justify-between items-center sm:px-0">
        <div>
          <Badge count={index} color="blue" offset={[15, 10]}>
            <h3 className="text-base font-semibold leading-7 text-gray-900">Flight Details</h3>
          </Badge>
          <p className="mt-1 max-w-2xl text-sm leading-6 text-gray-500">
            Personal details and application.
          </p>
        </div>
        <div>
          <Button type="primary" className="submit-button">
            Save changes
          </Button>
        </div>
      </div>
      <div className="mt-6 border-t border-gray-100">
        <dl className="divide-y divide-gray-100">
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">From / To</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div className="flex gap-4">
                <Input
                  addonAfter={iata_from}
                  addonBefore="From"
                  defaultValue={from.airport_name}
                ></Input>

                <Input addonAfter={iata_to} addonBefore="To" defaultValue={to.airport_name}></Input>
              </div>
            </dd>
          </div>
          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Date / Flight Class</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div className="flex gap-4">
                <DatePicker className="w-full" defaultValue={dayjs(departure_date, 'YYYY-MM-DD')} />

                <Select className="w-full"></Select>
              </div>
            </dd>
          </div>

          <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
            <dt className="text-sm font-medium leading-6 text-gray-900">Passengers</dt>
            <dd className="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
              <div className="flex space-x-9">
                <Input addonAfter="Adults" type="number" defaultValue={adults}></Input>
                <Input addonAfter="Children" type="number" defaultValue={child}></Input>
                <Input addonAfter="Infants" type="number" defaultValue={infants}></Input>
              </div>
            </dd>
          </div>
        </dl>
      </div>
    </div>
  );
};

export default FlightDetailsPage;
