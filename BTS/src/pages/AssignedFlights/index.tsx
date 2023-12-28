import { useParams } from "react-router-dom";
import useGetFlightById from "@hooks/useGetFlightById.ts";
import Navigation from "./components/Navigation";
import ClientInfo from "./components/ClientInfo";
import FlightDetails from "./components/FlightDetails";
import useGetClientById from "@hooks/useGetClientById.ts";
import Loader from "@components/Loader";
import useGetUserById from "@hooks/useGetUserById.ts";
import { useGetPageObject } from "./components/Navigation/constants.tsx";

const items = [
  { id: 1, content: ClientInfo },
  { id: 2, content: FlightDetails },
  { id: 3, content: Navigation },
];

type pagesType =
  | "follow-up"
  | "client-request"
  | "flight-details"
  | "price-quote";

const AssignedFlights = () => {
  const id = useParams().id;
  const page = useParams().page as pagesType;
  const pageObject = useGetPageObject();
  const { flightDetails, isLoading: isFlightLoading } = useGetFlightById(id);
  const { clientDetails, isLoading: isClientDataLoading } = useGetClientById(
    flightDetails?.client_id,
  );
  const { userDetails, isLoading: isUserDetailsLoading } = useGetUserById(
    flightDetails?.user_id,
  );

  if (isFlightLoading || isClientDataLoading || isUserDetailsLoading) {
    return <Loader />;
  }

  return (
    <ul role="list" className="space-y-3 w-full">
      {items.map((item) => {
        const Content = item.content;
        return (
          <li
            key={item.id}
            className="overflow-hidden rounded-md bg-white px-6 py-4 shadow"
          >
            {
              <>
                <Content
                  clientDetails={clientDetails}
                  flightDetails={flightDetails}
                  userDetails={userDetails}
                />
              </>
            }
          </li>
        );
      })}
      {page && pageObject[page]}
    </ul>
  );
};

export default AssignedFlights;
