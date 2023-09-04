import { MenuProps } from "antd";
import { Dispatch, SetStateAction } from "react";

export const useFiltersItems = (
  setModalState: Dispatch<SetStateAction<string | undefined>>,
): MenuProps["items"] => {
  return [
    {
      label: <span>Date</span>,
      key: 0,
      onClick: (e) => {
        setModalState(e.key);
      },
    },
    {
      label: <span>Agent</span>,
      key: 1,
      onClick: (e) => {
        setModalState(e.key);
      },
    },
    {
      label: <span>User</span>,
      key: 2,
      onClick: (e) => {
        setModalState(e.key);
      },
      children: [
        {
          label: <span>Name</span>,
          key: 3,
          onClick: (e) => {
            setModalState(e.key);
          },
        },
        {
          label: <span>Phone</span>,
          key: 4,
          onClick: (e) => {
            setModalState(e.key);
          },
        },
        {
          label: <span>Email</span>,
          key: 5,
          onClick: (e) => {
            setModalState(e.key);
          },
        },
        {
          label: <span>Departure</span>,
          key: 6,
          onClick: (e) => {
            setModalState(e.key);
          },
        },
        {
          label: <span>Arrival</span>,
          key: 7,
          onClick: (e) => {
            setModalState(e.key);
          },
        },
      ],
    },
  ];
};
