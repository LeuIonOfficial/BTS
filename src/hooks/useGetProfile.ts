import { Api } from '../api';
import { useQuery } from '@tanstack/react-query';

const useGetProfile = () => {
  const query = () => Api.profile.getProfile();

  const { isLoading, data: profile, isSuccess } = useQuery(['profile'], query, {
    select: (response) => {
      return response.data;
    },
  });

  return {
    isLoading,
    profile,
    isSuccess,
  };
};
export default useGetProfile;
