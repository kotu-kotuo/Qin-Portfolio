import useSWR from "swr";

const useTwitter = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: twitterData, error: twitterError } = useSWR(
    "/api/twitter",
    fetcher
  );
  return { twitterData, twitterError };
};

export default useTwitter;
