import { baseApi } from "./baseApi";

const ChangePasswordApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    ChangePassword: build.mutation({
      query: (args) => {
        return {
          url: "changePassword",
          method: "PUT",
          data: args,
        };
      },
    }),
  }),
});

export const { useChangePasswordMutation } = ChangePasswordApi;
