import { GetStaticProps, NextPage } from "next";
import React from "react";
import BlogItem from "src/components/Item/BlogItem";
import Headline from "src/components/Element/Headline";
import { client } from "src/lib/client";
import { Blog } from "src/pages";
import { MicroCMSListResponse } from "microcms-js-sdk";

const Blog: NextPage<MicroCMSListResponse<Blog>> = (props) => {
  return (
    <>
      <div className="headline-wrapper">
        <Headline title="Blog" />
      </div>
      <div className="px-4">
        <ul className="list-none pl-0 md:mx-auto  md:max-w-screen-md">
          {props.contents.map((content) => (
            <li className="item-wrapper" key={content.id}>
              <BlogItem
                contentID={content.id}
                title={content.title}
                content={content.content}
                publishedAt={content.publishedAt}
              />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.getList<Blog>({ endpoint: "blog" });

  return {
    props: data,
    revalidate: 100,
  };
};

export default Blog;
