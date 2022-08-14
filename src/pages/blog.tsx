import React from "react";
import BlogItem from "src/components/BlogItem";
import Headline from "src/components/Headline";
import Layout from "src/components/Layout";

const blog = () => {
  return (
    <>
      <Layout>
        <Headline title="Blog" />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
      </Layout>
    </>
  );
};

export default blog;
