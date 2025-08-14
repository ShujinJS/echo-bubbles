import {
  IUserRegisterRequest,
  IUserRegisterResponse,
} from "@/types/AuthTypes/user.type";
import { useMutation } from "@tanstack/react-query";
import Constants from "expo-constants";
import { api } from "../api";

const apiEndpointsCreateUser =
  Constants.expoConfig?.extra?.apiEndpointsCreateUser;

export const useRegisterUser = async () => {
  return useMutation<IUserRegisterResponse, Error, IUserRegisterRequest>({
    mutationFn: async (values) => {
      const { data } = await api.post<IUserRegisterResponse>(
        apiEndpointsCreateUser!,
        values
      );
      console.log(data);
      return data;
    },
  });
};
