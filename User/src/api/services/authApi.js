import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const authApi = createApi({
    
    reducerPath: "authApi",
    baseQuery: fetchBaseQuery({ baseUrl: process.env.REACT_APP_API_DOMAIN }),

    
    endpoints: (builder) => ({
        postRegister: builder.mutation({
            query: (data) => {
                return {
                    url: "/signup",
                    method: "POST",
                    body: data,
                    headers: {
                        "Content-Type": "application/json",
                        "Access-Control-Allow-Origin": "*",
                    },
                };
            },
        }),


        postLogin: builder.mutation({
            query: (data) => {
                return {
                    url: `/login?login=${data.login}&password=${data.password}&grecaptcha=${data.grecaptcha}`,
                    method: "POST",
                    headers: {
                        "Content-Type": "application/x-www-form-urlencoded",
                        "Access-Control-Allow-Origin": "*",
                    },
                };
            },
        }),
    }),
});


export const { usePostRegisterMutation, usePostLoginMutation } = authApi;
