import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../axiosSettings";

const API_ENDPOINTS = "adverts";

export const advertsApi = createApi({
  reducerPath: "adverts",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["adverts"],
  endpoints: (builder) => ({
    getAdverts: builder.query({
      query: (data) => ({
        url: API_ENDPOINTS,
        params: { page: data?.page, limit: data?.limit },
      }),
    }),
  }),
});

export const { useGetAdvertsQuery, useGetAdvertByIdQuery } = advertsApi;
