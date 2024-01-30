import { PostUserType } from '@models/user.ts';
import { Api } from '@api/index.ts';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { Dispatch, SetStateAction } from 'react';

export const useUpdateUser = (
  setDrawerState: Dispatch<SetStateAction<'create' | 'update' | 'closed'>>,
) => {
  const client = useQueryClient();
  const mutate = (data: PostUserType) => {
    return Api.users.putUser(data);
  };

  const { data: response, mutateAsync: updateUser } = useMutation([], mutate, {
    onSettled: (data) => {
      if (data && data?.status >= 200 && data?.status < 300) {
        setDrawerState('closed');
        client.invalidateQueries();
      }
    },
  });

  return {
    response,
    updateUser,
  };
};
