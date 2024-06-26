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
    retrieveAppliedJobsFeedback: builder.query({
      query: () => "/cv/jobs/feedback/",
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
      query: ({ post, user, status, rejected_from }) => ({
        url: "/cv/update-cv/",
        method: "POST",
        body: { post, user, status, rejected_from },
      }),
    }),
  }),
});

export const {
  useRetrieveAppliedCvQuery,
  useRetrieveAppliedJobsQuery,
  useRetrieveAppliedJobsFeedbackQuery,
  useRetrieveProfileSummaryQuery,
  useApplyJobMutation,
  useBuildProfileMutation,
  useUpdateCvStatusMutation,
} = cvApiSlice;
