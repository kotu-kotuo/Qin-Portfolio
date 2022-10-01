import { Repository } from "src/types/types";
import useSWR from "swr";

const useGithub = () => {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const { data: githubData } = useSWR("/api/github", fetcher);

  const repositories: Repository[] = githubData?.user.repositories.edges;

  return { repositories };
};

export default useGithub;
