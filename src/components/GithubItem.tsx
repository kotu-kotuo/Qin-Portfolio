import { Progress } from "@mantine/core";
import React from "react";
import { BiGitRepoForked } from "react-icons/bi";
import { BsStar } from "react-icons/bs";

const GithubItem = () => {
  return (
    <div className="mb-8">
      <div className="text-lg font-bold text-gray-900">
        lightsound/nexst-tailwind
      </div>
      <p className="my-2 text-gray-600">Next.js starter template.</p>
      <div className="flex items-center gap-x-4">
        <div className="flex items-center gap-x-1">
          <BsStar className="text-sm text-gray-400" />
          <p className="my-0 text-xs font-bold text-gray-400">117</p>
        </div>
        <div className="flex items-center">
          <BiGitRepoForked className="text-sm text-gray-400" />
          <p className="my-0 text-xs font-bold text-gray-400">18</p>
        </div>
      </div>
      <Progress
        sections={[
          { value: 60, color: "#3178C6" },
          { value: 35, color: "#F1E05A" },
          { value: 5, color: "#EDEDED" },
        ]}
        my={6}
      />
      <div>
        <div className="flex flex-wrap gap-x-4">
          <div className="flex items-center gap-x-1">
            <div className="h-1.5 w-1.5 rounded-full bg-[#3178C6]"></div>
            <p className="my-0 text-xs font-bold text-gray-900">TypeScript</p>
            <p className="my-0 text-xs font-bold text-gray-400">66.6%</p>
          </div>
          <div className="flex items-center gap-x-1">
            <div className="h-1.5 w-1.5 rounded-full bg-[#F1E05A]"></div>
            <p className="my-0 text-xs font-bold text-gray-900">JavaScript</p>
            <p className="my-0 text-xs font-bold text-gray-400">30.0%</p>
          </div>
          <div className="flex items-center gap-x-1">
            <div className="h-1.5 w-1.5 rounded-full bg-[#EDEDED]"></div>
            <p className="my-0 text-xs font-bold text-gray-900">Other</p>
            <p className="my-0 text-xs font-bold text-gray-400">3.4%</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GithubItem;
