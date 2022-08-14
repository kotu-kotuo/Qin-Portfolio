import React from "react";
import BlogItem from "src/components/BlogItem";
import Headline from "src/components/Headline";
import Layout from "src/components/Layout";

const blog = () => {
  return (
    <>
      <Layout>
        <Headline title="Blog" />
        <div className="md:mx-auto md:max-w-screen-md">
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </div>
      </Layout>
    </>
  );
};

export default blog;
