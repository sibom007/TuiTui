import { createApi } from "@reduxjs/toolkit/query/react";
import { tagTypesList } from "../tagType";
import { axiosBaseQuery } from "@/Helper/axiosBaseQuery";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: axiosBaseQuery({
    baseUrl: `${process.env.NEXT_PUBLIC_BACKEND_API_URL}`,
  }),
  endpoints: () => ({}),
  tagTypes: tagTypesList,
});
