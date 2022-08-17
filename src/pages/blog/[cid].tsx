import { NextPage } from "next";
import React from "react";
import Headline from "src/components/Headline";
import Layout from "src/components/Layout";

const BlogContent: NextPage = () => {
  return (
    <>
      <div className="headline-wrapper">
        <Headline title="This is a header" />
      </div>
      <div className="wrapper">
        <p className="my-1 text-sm font-bold text-gray-400">2022.07.11</p>
        <p
          dangerouslySetInnerHTML={{
            __html:
              "Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint.Velit officia consequat duis enim velit mollit.",
          }}
        />
      </div>
    </>
  );
};

export default BlogContent;
