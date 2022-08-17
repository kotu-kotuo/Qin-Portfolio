import { NextPage } from "next";
import React from "react";
import BlogItem from "src/components/Item/BlogItem";
import Headline from "src/components/Element/Headline";

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
