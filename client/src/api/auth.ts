import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { registrationReturn } from "./Types/registration";
import { loginReturn } from "./Types/login";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://q5xqc2-7000.csb.app" }),
  endpoints: (builder) => ({
    // Registration mutation
    registration: builder.mutation<
      registrationReturn,
      { email: string; password: string }
    >({
      query: (credentials) => ({
        url: "api/auth/registration",
        method: "POST",
        body: credentials,
      }),
    }),
    // Login mutation
    login: builder.mutation<loginReturn, { email: string; password: string }>({
      query: (credentials) => ({
        url: "api/auth/login",
        method: "POST",
        body: credentials,
      }),
    }),
    auth: builder.mutation<loginReturn, { jwtkey: string }>({
      query: (credentials) => ({
        url: "api/auth/auth",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const { useRegistrationMutation, useLoginMutation, useAuthMutation } =
  apiSlice;
