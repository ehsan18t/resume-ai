import {
  useRetrieveUserQuery,
  useVerifyMutation,
} from "@/redux/features/authApiSlice";
import {
  finishInitialLoad,
  setAuth,
  setUserData,
} from "@/redux/features/authSlice";
import { useAppDispatch } from "@/redux/hooks";
import { useEffect } from "react";

export default function useVerify() {
  const dispatch = useAppDispatch();
  const { data: user, isLoading: isUserLoading } = useRetrieveUserQuery();

  const [verify, { isLoading: isVerifyLoading, isError }] = useVerifyMutation();

  useEffect(() => {
    verify()
      .unwrap()
      .then(() => {
        dispatch(setAuth());
        if (user) {
          dispatch(setUserData(user));
        }
      })
      .catch((error) => {
        console.error("Verification failed", error);
      })
      .finally(() => {
        dispatch(finishInitialLoad());
      });
  }, [verify, dispatch, user]);

  return {
    isLoading: isVerifyLoading || isUserLoading,
    isError,
  };
}
