import React from "react";
import Headline from "src/components/Headline";
import Layout from "src/components/Layout";

const BlogContent = () => {
  return (
    <>
      <Layout>
        <Headline title="This is a header" />
        <div className="wrapper">
          <p className="font-bold text-sm text-gray-400 my-1">2022.07.11</p>
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
