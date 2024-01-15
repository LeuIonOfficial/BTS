import { PostUserType } from "@models/user.ts";
import { Api } from "@api/index.ts";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Dispatch, SetStateAction } from "react";

const usePostUser = (
  setDrawerState: Dispatch<SetStateAction<"create" | "update" | "closed">>,
) => {
  const client = useQueryClient();
  const mutation = async (data: PostUserType) => {
    return Api.users.postUser(data);
  };

  const {
    data: response,
    mutateAsync: postUser,
    isSuccess,
  } = useMutation(mutation, {
    onSettled: (data) => {
      if (data && data?.status >= 200 && data?.status < 300) {
        setDrawerState("closed");
        client.invalidateQueries();
      }
    },
  });

  return {
    postUser,
    isSuccess,
    response,
  };
};

export default usePostUser;
