"use client";

import { useVerify } from "@/hooks";

export default function Setup() {
  const { isLoading, isError } = useVerify();

  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error during verification</p>;

  return <></>;
}
