import { apiSlice } from "../services/apiSlice";

const postApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveUserPosts: builder.query({
      query: () => "/post/user-posts/",
    }),
    retrieveCategoryPosts: builder.query({
      query: (slung) => `/post/category-posts/?slung=${slung}`,
    }),
    retrieveCategoryList: builder.query({
      query: () => "/post/category-list/",
    }),
    retrieveFeed: builder.query({
      query: () => "/post/feed/",
    }),
    createCategory: builder.mutation({
      query: ({ category }) => ({
        url: "/post/category/create/",
        method: "POST",
        body: { category },
      }),
    }),
    createPost: builder.mutation({
      query: ({ content, is_job_circular, category }) => ({
        url: "/post/create/",
        method: "POST",
        body: { content, is_job_circular, category },
      }),
    }),
  }),
});

export const {
  useRetrieveUserPostsQuery,
  useRetrieveCategoryPostsQuery,
  useRetrieveCategoryListQuery,
  useRetrieveFeedQuery,
  useCreateCategoryMutation,
  useCreatePostMutation,
} = postApiSlice;
