import { createApi } from "@reduxjs/toolkit/query/react";
import { axiosBaseQuery } from "../../axiosSettings";

const API_ENDPOINTS = "adverts";

export const advertsApi = createApi({
  reducerPath: "adverts",
  baseQuery: axiosBaseQuery(),
  tagTypes: ["adverts"],
  endpoints: (builder) => ({
    getAdverts: builder.query({
      query: () => ({
        url: API_ENDPOINTS,
        // params: { page, limit },
      }),
      providesTags: ["adverts"],
    }),
    getAdvertById: builder.query({
      query: (id) => ({
        url: `${API_ENDPOINTS}/${id}`,
      }),
    }),
  }),
});

export const { useGetAdvertsQuery, useGetAdvertByIdQuery } = advertsApi;
