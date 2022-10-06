import { Progress } from "@mantine/core";
import { FC } from "react";
import { BiGitRepoForked } from "react-icons/bi";
import { BsStar } from "react-icons/bs";
import { GithubProps } from "src/types/types";

const GithubItem: FC<GithubProps> = (props) => {
  console.log(props);
  const languagesTotalSize = props.languages.totalSize;

  return (
    <div>
      <div className="text-lg font-bold text-gray-900">{props.name}</div>
      {props.description ? (
        <p className="my-2 text-sm text-gray-600">{props.description}</p>
      ) : null}
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-1">
          <BsStar className="text-sm text-gray-400" />
          <p className="my-0 text-xs font-bold text-gray-400">
            {props.stargazerCount}
          </p>
        </div>
        <div className="flex items-center">
          <BiGitRepoForked className="text-sm text-gray-400" />
          <p className="my-0 text-xs font-bold text-gray-400">
            {props.forkCount}
          </p>
        </div>
      </div>

      <Progress
        sections={props.languages.edges.map((edge) => {
          return {
            value: (edge.size / languagesTotalSize) * 100,
            color: edge.node.color,
          };
        })}
        my={6}
      />

      <div>
        <div className="flex flex-wrap gap-x-4">
          {props.languages.edges.map((edge) => (
            <div className="flex items-center gap-x-1" key={edge.node.id}>
              <div
                className="h-1.5 w-1.5 rounded-full "
                style={{ backgroundColor: edge.node.color }}
              ></div>
              <p className="my-0 text-xs font-bold text-light">
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
