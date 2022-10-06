import dayjs from "dayjs";
import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";
import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import Headline from "src/components/Element/Headline";
import { client } from "src/lib/client";
import { Portfolio } from "src/types/types";

type PortfolioProps = Portfolio & MicroCMSContentId & MicroCMSDate;

const PortfolioContent: NextPage<PortfolioProps> = (props) => {
  return (
    <>
      <div className="headline-wrapper">
        <Headline title="Portfolio" />
      </div>
      <div className="wrapper">
        <img
          src={props.featuredImage.url}
          alt="画像"
          className="aspect-video w-full object-cover"
        />
        <div className="my-4 text-xl font-bold text-gray-900">
          {props.title}
        </div>
        <p className="mb-4 text-xs font-bold text-gray-400">
          {dayjs(props.startDate).format("YYYY.MM")}{" "}
          <span>{props.endDate ? "-" : "~"}</span>{" "}
          {dayjs(props.endDate).format("YYYY.MM")}
        </p>
        <div
          className="my-2 text-gray-900"
          dangerouslySetInnerHTML={{
            __html: props.content,
          }}
        />
      </div>
    </>
  );
};

export const getStaticPaths: GetStaticPaths<{ cid: string }> = async () => {
  const data = await client.getList({ endpoint: "portfolio" });
  const ids = data.contents.map((content) => `/portfolio/${content.id}`);
  return {
    paths: ids,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps<
  PortfolioProps,
  { cid: string }
> = async (ctx) => {
  if (!ctx.params) {
    return { notFound: true };
  }
  const data = await client.getListDetail<Portfolio>({
    endpoint: "portfolio",
    contentId: ctx.params.cid,
  });

  return {
    props: data,
  };
};

export default PortfolioContent;
