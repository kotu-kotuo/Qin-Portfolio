import useSWR from "swr";

const useGithub = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: githubData, error: githubError } = useSWR(
    "/api/github",
    fetcher
  );

  const repositories = githubData?.user.repositories.edges;

  return { repositories, githubError };
};

export default useGithub;
