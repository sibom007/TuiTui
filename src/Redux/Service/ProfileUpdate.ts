import { tagTypes } from "../tagType";
import { baseApi } from "./baseApi";

const ProfileUpdateApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    profileUpdate: build.mutation({
      query: (data) => {
        return {
          url: "/profile",
          method: "GET",
          body: data.updateInfo,
        };
      },
    }),
  }),
});

export const { useProfileUpdateMutation } = ProfileUpdateApi;
