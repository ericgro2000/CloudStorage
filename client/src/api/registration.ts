
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const apiSlice = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:5000/api' }),
  endpoints: (builder) => ({
    registration: builder.mutation<string, { email: string; password: string }>({
      query: (credentials) => ({
        url: '/auth/registration',
        method: 'POST',
        body: credentials,
      }),
    }),
  }),
});

export const { useRegistrationMutation } = apiSlice;