import { apiSlice } from "../services/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveAppliedCv: builder.query({
      query: (post) => `/cv/list/?post=${post}`,
    }),
    applyJob: builder.mutation({
      query: ({ post, cv }) => ({
        url: "/cv/apply/",
        method: "POST",
        body: { post, cv },
      }),
    }),
    updateCvStatus: builder.mutation({
      query: ({ post, user, status }) => ({
        url: "/post/cv/update-cv/",
        method: "POST",
        body: { post, user, status },
      }),
    }),
  }),
});

export const {
  useRetrieveAppliedCvQuery,
  useApplyJobMutation,
  useUpdateCvStatusMutation,
} = authApiSlice;
