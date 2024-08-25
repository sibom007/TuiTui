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
    SwipeRight: build.mutation({
      query: (args) => {
        return {
          url: "swipeRight",
          method: "PATCH",
          data: args,
        };
      },
    }),
    SwipeLeft: build.mutation({
      query: (args) => {
        return {
          url: "swipeLeft",
          method: "PATCH",
          data: args,
        };
      },
    }),
    LikedProple: build.query({
      query: (args) => {
        return {
          url: "LikedProple",
          method: "GET",
          params: {
            id: args.id,
          },
        };
      },
    }),
  }),
});

export const {
  useAllProfileQuery,
  useSwipeRightMutation,
  useSwipeLeftMutation,
  useLikedPropleQuery,
} = SwipeProfileApi;
