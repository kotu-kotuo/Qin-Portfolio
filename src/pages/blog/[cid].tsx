import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import React from "react";
import Headline from "src/components/Element/Headline";
import { client } from "src/lib/client";
import { Blog } from "src/pages";
import dayjs from "dayjs";

type BlogProps = Blog & MicroCMSContentId & MicroCMSDate;

const BlogContent: NextPage<BlogProps> = (props) => {
  return (
    <>
      <div className="headline-wrapper">
        <Headline title={props.title} />
      </div>
      <div className="wrapper">
        <p className="-mt-1 mb-1 text-sm font-bold text-gray-400">
          {dayjs(props.publishedAt).format("YYYY/MM/DD")}
        </p>
        <div
          dangerouslySetInnerHTML={{
            __html: props.content,
          }}
        />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ cid: string }> = async () => {
  const data = await client.getList({ endpoint: "blog" });
  const ids = data.contents.map((content) => `/blog/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  BlogProps,
  { cid: string }
> = async (ctx) => {
  if (!ctx.params) {
    return { notFound: true };
  }
  const data = await client.getListDetail<Blog>({
    endpoint: "blog",
    contentId: ctx.params.cid,
  });

  return {
    props: data,
  };
};

export default BlogContent;
