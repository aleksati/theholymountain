import useSWR from "swr";
import { SITE_DOMAIN } from "../config";

const fetcher = (...args) => fetch(...args).then(res => res.json());

const getLikesFromDB = () => {
  const { data, error, mutate } = useSWR(
    `${SITE_DOMAIN}/api/likes/getLikes`,
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export default getLikesFromDB;
