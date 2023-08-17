import { apiSlice } from "../../api/apiSlice";
import { userLoggedIn } from "./authSlice";

export const userAuthApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: "/register",
                method: "POST",
                body: data,
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.userFullName,
                        })
                    );
                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.userFullName,
                        })
                    );
                } catch (err) {
                    // do nothing
                }
            },
        }),
        userLogin: builder.mutation({
            query: (data) => ({
                url: '/PostLoginDetails',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { queryFulfilled, dispatch }) {
                try {
                    const result = await queryFulfilled;
                    localStorage.setItem(
                        "auth",
                        JSON.stringify({
                            accessToken: result.data.accessToken,
                            user: result.data.userFullName,
                        })
                    );

                    dispatch(
                        userLoggedIn({
                            accessToken: result.data.accessToken,
                            user: result.data.userFullName,
                        })
                    );
                } catch (error) {

                }
            }
        })
    })
})


export const { useUserLoginMutation } = userAuthApi