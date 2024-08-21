import { baseApi } from "./baseApi";

const ProfileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    Updateprofile: build.mutation({
      query: (data) => {
        return {
          url: "profile",
          method: "PUT",
          data,
        };
      },
    }),
  }),
});

export const { useUpdateprofileMutation } = ProfileApi;
