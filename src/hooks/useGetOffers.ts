import { Api } from '@api/index.ts';
import { useQuery } from '@tanstack/react-query';
import { useState } from 'react';

const useGetOffers = (id: string | undefined) => {
  const [page, setPage] = useState(1);
  const [per_page, setPerPage] = useState(10);
  const query = () => {
    return Api.offer.getOffers(id, { page, per_page });
  };

  const { isLoading, data: offers } = useQuery(['offers', page, per_page], query, {
    select: (response) => {
      return response;
    },
    enabled: !!id,
  });

  return {
    isLoading,
    offers,
    setPage,
    setPerPage,
    page,
    per_page,
  };
};

export default useGetOffers;
