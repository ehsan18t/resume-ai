import { apiSlice } from "../services/apiSlice";

const cvApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveAppliedCv: builder.query({
      query: (post) => `/cv/list/?post=${post}`,
    }),
    retrieveProfileSummary: builder.query({
      query: (user_id) => `/cv/summary/?u=${user_id}`,
    }),
    applyJob: builder.mutation({
      query: ({ post, cv }) => ({
        url: "/cv/apply/",
        method: "POST",
        body: { post, cv },
      }),
    }),
    retrieveAppliedJobs: builder.query({
      query: () => "/cv/jobs/",
    }),
    buildProfile: builder.mutation({
      query: ({ pdf_file }) => {
        const formData = new FormData();
        formData.append("pdf_file", pdf_file);

        return {
          url: "/pdftoprofile/",
          method: "POST",
          body: formData,
        };
      },
    }),
    updateCvStatus: builder.mutation({
      query: ({ post, user, status }) => ({
        url: "/cv/update-cv/",
        method: "POST",
        body: { post, user, status },
      }),
    }),
  }),
});

export const {
  useRetrieveAppliedCvQuery,
  useRetrieveAppliedJobsQuery,
  useRetrieveProfileSummaryQuery,
  useApplyJobMutation,
  useBuildProfileMutation,
  useUpdateCvStatusMutation,
} = cvApiSlice;
