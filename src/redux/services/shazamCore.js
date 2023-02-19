import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
/* added new fille shazamCoreApi because Key was exposed */
/* LOADING ENVIRONMENT VARIBLES IN REACT APP USING VITE
https://stackoverflow.com/questions/70883903/loading-env-variables-in-react-app-using-vite */

export const API_KEY = import.meta.env.VITE_SHAZAM_CORE_RAPID_API_KEY;
export const shazamCoreApi = createApi({
  reducerPath: 'shazamCoreApi',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://shazam-core.p.rapidapi.com/',
    prepareHeaders: (headers) => {
      headers.set('X-RapidAPI-Key', API_KEY);

      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopCharts: builder.query({ query: () => 'v1/charts/world' }),
    getSongDetails: builder.query({ query: ({ songid }) => `v1/tracks/details?track_id=${songid}` }),
    getSongRelated: builder.query({ query: ({ songid }) => `v1/tracks/related?track_id=${songid}` }),
  }),
});

export const {
  useGetTopChartsQuery,
  useGetSongDetailsQuery,
  useGetSongRelatedQuery,
} = shazamCoreApi;
