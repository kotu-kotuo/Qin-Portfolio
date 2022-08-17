import { NextPage } from "next";
import React from "react";
import BlogItem from "src/components/BlogItem";
import Headline from "src/components/Headline";
import Layout from "src/components/Layout";

const Blog: NextPage = () => {
  return (
    <>
      <div className="headline-wrapper">
        <Headline title="Blog" />
      </div>
      <div className="md:mx-auto md:max-w-screen-md">
        <div className="item-wrapper">
          <BlogItem />
        </div>
        <div className="item-wrapper">
          <BlogItem />
        </div>
        <div className="item-wrapper">
          <BlogItem />
        </div>
        <div className="item-wrapper">
          <BlogItem />
        </div>
        <div className="item-wrapper">
          <BlogItem />
        </div>
        <div className="item-wrapper">
          <BlogItem />
        </div>
        <div className="item-wrapper">
          <BlogItem />
        </div>
        <div className="item-wrapper">
          <BlogItem />
        </div>
      </div>
    </>
  );
};

export default Blog;
