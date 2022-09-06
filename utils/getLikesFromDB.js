import useSWR from "swr";
import { SITE_DOMAIN } from "../config";

const fetcher = (url, releaseKey) =>
  fetch(url, {
    method: "POST",
    body: JSON.stringify({ key: releaseKey }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then(res => res.json());

const getLikesFromDB = releaseKey => {
  const { data, error, mutate } = useSWR(
    [`${SITE_DOMAIN}/api/getLikes`, releaseKey],
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
