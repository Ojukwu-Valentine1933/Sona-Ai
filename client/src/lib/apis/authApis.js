import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { userApi } from "./userApi";

let BASE_URL;
if (process.env.NODE_ENV === "production") {
  BASE_URL = process.env.REACT_APP_API_PROD_BASE_URL;
} else {
  BASE_URL = process.env.REACT_APP_API_DEV_BASE_URL;
}

export const authApi = createApi({
  reducerPath: "authApi",
  baseQuery: fetchBaseQuery({ baseUrl: BASE_URL }),
  endpoints: (builder) => ({
    loginWithGoogle: builder.mutation({
      query: (payload) => ({
        url: `/auth/login`,
        method: "POST",
        headers: {
          Authorization: `Bearer ${payload}`,
        },
      }),

      async onQueryStarted(arg, { dispatch, queryFulfilled }) {
        try {
          await queryFulfilled;
          await dispatch(
            userApi.endpoints.getCurrentUser.initiate(
              localStorage.getItem("authToken")
            )
          );
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const { useLoginWithGoogleMutation } = authApi;
