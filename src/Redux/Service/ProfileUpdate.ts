import { tagTypes } from "../tagType";
import { baseApi } from "./baseApi";

const ProfileUpdateApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    GetDonnerList: build.query({
      query: (data) => {
        return {
          url: "donor-list",
          method: "GET",
          params: data,
        };
      },
      providesTags: [tagTypes.Donner],
    }),
  }),
});

export const { useGetDonnerListQuery } = ProfileUpdateApi;
