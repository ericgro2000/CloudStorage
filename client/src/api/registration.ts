import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://q5xqc2-7000.csb.app/" }),
  endpoints: (builder) => ({
    registration: builder.mutation<string, { email: string; password: string }>(
      {
        query: (credentials) => ({
          url: "api/auth/registration",
          method: "POST",
          body: credentials,
        }),
      }
    ),
  }),
});

export const { useRegistrationMutation } = apiSlice;
