import { baseApi } from "./baseApi";

const ProfileApi = baseApi.injectEndpoints({
  endpoints: (build) => ({
    GetprofileById: build.query({
      query: (args) => {
        return {
          url: "profile",
          method: "GET",
          params: {
            id: args?.id,
          },
        };
      },
      providesTags: ["Profile", "Image", "Colour"],
    }),
    Updateprofile: build.mutation({
      query: (data) => {
        return {
          url: "profile",
          method: "PUT",
          data,
        };
      },
      invalidatesTags: ["Profile"],
    }),
    UpdateImage: build.mutation({
      query: (args) => {
        return {
          url: "updateImg",
          method: "PUT",
          data: args,
        };
      },
      invalidatesTags: ["Image"],
    }),
    UpdateBackgroundColour: build.mutation({
      query: (args) => {
        return {
          url: "backgroundColour",
          method: "PUT",
          data: args,
        };
      },
      invalidatesTags: ["Colour"],
    }),
  }),
});

export const {
  useUpdateprofileMutation,
  useGetprofileByIdQuery,
  useUpdateImageMutation,
  useUpdateBackgroundColourMutation,
} = ProfileApi;
