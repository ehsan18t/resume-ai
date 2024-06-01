import { apiSlice } from "../services/apiSlice";

const notificationApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    retrieveNotificationCount: builder.query({
      query: () => "/notifications/unread",
    }),
    retrieveNotifications: builder.query({
      query: () => "/notifications",
    }),
  }),
});

export const {
  useRetrieveNotificationCountQuery,
  useRetrieveNotificationsQuery,
} = notificationApiSlice;
