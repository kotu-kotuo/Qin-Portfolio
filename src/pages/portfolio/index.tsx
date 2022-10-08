import { Grid, Skeleton } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticProps, NextPage } from "next";
import Headline from "src/components/Element/Headline";
import PortfolioItem from "src/components/Item/PortfolioItem";
import { client } from "src/lib/client";
import { useMediaQuery } from "src/lib/mantine";
import { Portfolio } from "src/types/types";

const PortfolioList: NextPage<MicroCMSListResponse<Portfolio>> = (props) => {
  const largerThanSM = useMediaQuery("sm");

  return (
    <>
      <div className="headline-wrapper">
        <Headline title="Portfolio" />
      </div>
      <Skeleton visible={largerThanSM === null}>
        <div className="">
          <Grid>
            {props.contents.map((content) => (
              <Grid.Col span={largerThanSM ? 4 : 12} key={content.id}>
                <div className="item-wrapper">
                  <PortfolioItem
                    id={content.id}
                    order={content.order}
                    title={content.title}
                    content={content.content}
                    featuredImage={content.featuredImage}
                    technologies={content.technologies}
                    siteLink={content.siteLink}
                    githubLink={content.githubLink}
                    publishedAt={content.publishedAt}
                    createdAt={content.createdAt}
                    updatedAt={content.updatedAt}
                  />
                </div>
              </Grid.Col>
            ))}
          </Grid>
        </div>
      </Skeleton>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.getList<Portfolio>({
    endpoint: "portfolio",
  });
  return {
    props: data,
    revalidate: 100,
  };
};

export default PortfolioList;
