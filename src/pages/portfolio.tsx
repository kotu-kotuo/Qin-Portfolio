import { Grid } from "@mantine/core";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { GetStaticProps, NextPage } from "next";
import React from "react";
import Headline from "src/components/Element/Headline";
import PortfolioItem from "src/components/Item/PortfolioItem";
import { client } from "src/lib/client";
import { useMediaQuery } from "src/lib/mantine";
import { Portfolio } from "src/pages";

const PortfolioList: NextPage<MicroCMSListResponse<Portfolio>> = (props) => {
  const largerThanSM = useMediaQuery("sm");

  return (
    <>
      <div className="headline-wrapper">
        <Headline title="Portfolio" />
      </div>
      <div className="wrapper">
        {!largerThanSM ? (
          // モバイルポートフォリオリスト
          <>
            {props.contents.map((content) => (
              <div className="item-wrapper" key={content.id}>
                <PortfolioItem
                  contentID={content.id}
                  title={content.title}
                  content={content.content}
                  featuredImage={content.featuredImage}
                  startDate={content.startDate}
                  endDate={content.endDate}
                />
              </div>
            ))}
          </>
        ) : (
          // PCポートフォリオリスト
          <>
            <Grid>
              {props.contents.map((content) => (
                <Grid.Col span={4} key={content.id}>
                  <div className="item-wrapper">
                    <PortfolioItem
                      contentID={content.id}
                      title={content.title}
                      content={content.content}
                      featuredImage={content.featuredImage}
                      startDate={content.startDate}
                      endDate={content.endDate}
                    />
                  </div>
                </Grid.Col>
              ))}
            </Grid>
          </>
        )}
      </div>
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
