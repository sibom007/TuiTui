import { baseApi } from "./baseApi";

const SwipeProfileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    AllProfile: build.query({
      query: (args) => {
        return {
          url: "swipeProfile",
          method: "GET",
          params: {
            id: args.id,
          },
        };
      },
    }),
  }),
});

export const { useAllProfileQuery } = SwipeProfileApi;
