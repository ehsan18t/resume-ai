import { apiSlice } from "../services/apiSlice";

const notificationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveNotificationCount: builder.query({
      query: () => "/notifications/unread",
    }),
    retrieveNotifications: builder.query({
      query: () => "/notifications",
    }),
    clearNotification: builder.mutation({
      query: () => ({
        url: "/notifications/clear/",
        method: "POST",
      }),
    }),
  }),
});

export const {
  useRetrieveNotificationCountQuery,
  useRetrieveNotificationsQuery,
  useClearNotificationMutation,
} = notificationApiSlice;
