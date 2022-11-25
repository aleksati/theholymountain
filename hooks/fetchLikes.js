import { SITE_DOMAIN } from "../config";
import useSWR from "swr";

const fetcher = (url, method, releaseKey) =>
  fetch(url, {
    method: method ? method : null,
    body: JSON.stringify({ key: releaseKey }),
    headers: {
      "Content-Type": "application/json",
    },
  }).then((res) => res.json());

const fetchLikes = (method, releaseKey) => {
  const { data, error, mutate } = useSWR(
    [`${SITE_DOMAIN}/api/likes`, method, releaseKey],
    fetcher
  );

  return {
    data,
    isLoading: !error && !data,
    isError: error,
    mutate,
  };
};

export default fetchLikes;
