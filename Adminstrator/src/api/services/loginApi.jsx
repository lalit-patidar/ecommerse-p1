import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
    reducerPath: "loginApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://stage-api.nichoshop.com/api/v1",
    }),
    endpoints: (builder) => ({
        postLogin: builder.mutation({
            query: (data) => {
                const { id, pwd, reCaptcha } = data;
                return {
                    url: `/admin/login?login=${id}&password=${pwd}&rememberMe=true&grecaptcha=${reCaptcha}`,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                };
            },
        }),
    }),
});

export const { usePostLoginMutation } = loginApi;
