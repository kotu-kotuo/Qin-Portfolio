import { NextPage } from "next";
import React from "react";
import Headline from "src/components/Headline";
import Layout from "src/components/Layout";

const BlogContent: NextPage = () => {
  return (
    <>
      <Layout>
        <Headline title="This is a header" />
        <div className="wrapper">
          <p className="my-1 text-sm font-bold text-gray-400">2022.07.11</p>
          <p>
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
        </div>
      </Layout>
    </>
  );
};

export default BlogContent;
