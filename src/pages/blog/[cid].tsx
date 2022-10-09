import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { client } from "src/lib/client";
import dayjs from "dayjs";
import { Blog } from "src/types/types";
import { TypographyStylesProvider } from "@mantine/core";
import ButtonPrimary from "src/components/Element/ButtonPrimary";

type BlogProps = Blog & MicroCMSContentId & MicroCMSDate;

const BlogContent: NextPage<BlogProps> = (props) => {
  console.log("cid", props);
  return (
    <>
      <div className="headline-wrapper">
        <div className="font-main text-3xl font-bold text-light">
          {props.title}
        </div>
        <hr className="mt-6 border-b border-t-0 border-solid border-light opacity-80" />
      </div>
      <div className="">
        <p className="-mt-1 mb-6 text-sm font-bold text-gray-400">
          {dayjs(props.publishedAt).format("YYYY/MM/DD")}
        </p>
        <TypographyStylesProvider>
          <div
            dangerouslySetInnerHTML={{
              __html: props.content,
            }}
          />
        </TypographyStylesProvider>
      </div>
      <div className="text-center">
        <ButtonPrimary text="Go Back" link="/" />
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
    revalidate: 100,
  };
};

export default BlogContent;
