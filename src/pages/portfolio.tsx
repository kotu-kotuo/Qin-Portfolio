import { Grid } from "@mantine/core";
import { NextPage } from "next";
import React from "react";
import Headline from "src/components/Headline";
import PortfolioItem from "src/components/PortfolioItem";
import { useViewportSize } from "src/lib/mantine";

const PortfolioList: NextPage = () => {
  const { width } = useViewportSize();

  return (
    <>
      <div className="headline-wrapper">
        <Headline title="Portfolio" />
      </div>
      <div className="wrapper">
        {width < 768 ? (
          <>
            <div className="item-wrapper">
              <PortfolioItem />
            </div>
            <div className="item-wrapper">
              <PortfolioItem />
            </div>
            <div className="item-wrapper">
              <PortfolioItem />
            </div>
            <div className="item-wrapper">
              <PortfolioItem />
            </div>
            <div className="item-wrapper">
              <PortfolioItem />
            </div>
            <div className="item-wrapper">
              <PortfolioItem />
            </div>
            <div className="item-wrapper">
              <PortfolioItem />
            </div>
            <div className="item-wrapper">
              <PortfolioItem />
            </div>
          </>
        ) : (
          <>
            <Grid>
              <Grid.Col span={4}>
                <div className="headline-wrapper">
                  <PortfolioItem />
                </div>
              </Grid.Col>
              <Grid.Col span={4}>
                <div className="headline-wrapper">
                  <PortfolioItem />
                </div>
              </Grid.Col>
              <Grid.Col span={4}>
                <div className="headline-wrapper">
                  <PortfolioItem />
                </div>
              </Grid.Col>
              <Grid.Col span={4}>
                <div className="headline-wrapper">
                  <PortfolioItem />
                </div>
              </Grid.Col>
              <Grid.Col span={4}>
                <div className="headline-wrapper">
                  <PortfolioItem />
                </div>
              </Grid.Col>
              <Grid.Col span={4}>
                <div className="headline-wrapper">
                  <PortfolioItem />
                </div>
              </Grid.Col>
              <Grid.Col span={4}>
                <div className="headline-wrapper">
                  <PortfolioItem />
                </div>
              </Grid.Col>
              <Grid.Col span={4}>
                <div className="headline-wrapper">
                  <PortfolioItem />
                </div>
              </Grid.Col>
              <Grid.Col span={4}>
                <div className="headline-wrapper">
                  <PortfolioItem />
                </div>
              </Grid.Col>
            </Grid>
          </>
        )}
      </div>
    </>
  );
};

export default PortfolioList;
