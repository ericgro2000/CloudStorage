import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://3djflp-7000.csb.app" }),
  endpoints: (builder) => ({
    // Registration mutation
    registration: builder.mutation<any, { email: string; password: string }>({
      query: (credentials) => ({
        url: "api/auth/registration",
        method: "POST",
        body: credentials,
      }),
    }),
    // Login mutation
    login: builder.mutation<any, { email: string; password: string }>({
      query: (credentials) => ({
        url: "api/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useRegistrationMutation, useLoginMutation } = apiSlice;
