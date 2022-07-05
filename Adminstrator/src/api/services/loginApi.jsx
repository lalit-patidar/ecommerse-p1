import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const loginApi = createApi({
    reducerPath: "loginApi",
    baseQuery: fetchBaseQuery({
        baseUrl: "https://stage-api.nichoshop.com/api/v1",
    }),
    endpoints: (builder) => ({
        postLogin: builder.mutation({
            query: () => {
                return {
                    url: `/admin/login?login=developeradmin&password=123456&rememberMe=true&grecaptcha=6Ld9ZTgdAAAAAFN8gTK7t4qY9kg5UPwSDxIANoOQ`,
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
