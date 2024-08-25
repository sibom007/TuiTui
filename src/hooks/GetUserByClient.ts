"use client";
import { useUserId } from "./GetId";
import { useGetprofileByIdQuery } from "@/Redux/api/profile";

const useGetUser = () => {
  const id = useUserId();
  const { data, isLoading, isFetching, isError } = useGetprofileByIdQuery({
    id,
  });
  return { data, isLoading, isError, isFetching };
};

export { useGetUser };
