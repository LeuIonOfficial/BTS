import useGetUserById from '@hooks/useGetUserById.ts';
import { GetFlightsType } from '@models/flights.ts';

const UserInfo = (props: { flightDetails: GetFlightsType }) => {
  const { userDetails } = useGetUserById(props.flightDetails.user_id);
  return <div>User Info</div>;
};

export default UserInfo;
