import { Progress } from "@mantine/core";
import { BiGitRepoForked } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { RepoData } from "src/types/types";

const GithubItem = (props) => {
  const repoData: RepoData = props.repository.node;
  const languagesTotalSize = repoData.languages.totalSize;

  return (
    <div>
      <div className="text-lg font-bold text-gray-900">{repoData.name}</div>
      {repoData.description ? (
        <p className="my-2 text-sm text-gray-600">{repoData.description}</p>
      ) : null}
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-1">
          <BsStar className="text-sm text-gray-400" />
          <p className="my-0 text-xs font-bold text-gray-400">
            {repoData.stargazerCount}
          </p>
        </div>
        <div className="flex items-center">
          <BiGitRepoForked className="text-sm text-gray-400" />
          <p className="my-0 text-xs font-bold text-gray-400">
            {repoData.forkCount}
          </p>
        </div>
      </div>

      <Progress
        sections={repoData.languages.edges.map((edge) => {
          return {
            value: (edge.size / languagesTotalSize) * 100,
            color: edge.node.color,
          };
        })}
        my={6}
      />

      <div>
        <div className="flex flex-wrap gap-x-4">
          {repoData.languages.edges.map((edge) => (
            <div className="flex items-center gap-x-1" key={edge.node.id}>
              <div
                className="h-1.5 w-1.5 rounded-full "
                style={{ backgroundColor: edge.node.color }}
              ></div>
              <p className="my-0 text-xs font-bold text-gray-900">
                {edge.node.name}
              </p>
              <p className="my-0 text-xs font-bold text-gray-400">
                {Math.round(
                  (edge.size / languagesTotalSize) * Math.pow(10, 3)
                ) / Math.pow(10, 1)}
                %
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default GithubItem;
