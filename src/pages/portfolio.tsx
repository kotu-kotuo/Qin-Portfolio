import { Grid } from "@mantine/core";
import React from "react";
import Headline from "src/components/Headline";
import Layout from "src/components/Layout";
import PortfolioItem from "src/components/PortfolioItem";
import { useViewportSize } from "src/lib/mantine";

const portfolio = () => {
  const { width } = useViewportSize();

  return (
    <>
      <Layout>
        <Headline title="Portfolio" />
        <div className="wrapper">
          {width < 768 ? (
            <>
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
            </>
          ) : (
            <>
              <Grid>
                <Grid.Col span={4}>
                  <PortfolioItem />
                </Grid.Col>
                <Grid.Col span={4}>
                  <PortfolioItem />
                </Grid.Col>
                <Grid.Col span={4}>
                  <PortfolioItem />
                </Grid.Col>
                <Grid.Col span={4}>
                  <PortfolioItem />
                </Grid.Col>
                <Grid.Col span={4}>
                  <PortfolioItem />
                </Grid.Col>
                <Grid.Col span={4}>
                  <PortfolioItem />
                </Grid.Col>
                <Grid.Col span={4}>
                  <PortfolioItem />
                </Grid.Col>
                <Grid.Col span={4}>
                  <PortfolioItem />
                </Grid.Col>
                <Grid.Col span={4}>
                  <PortfolioItem />
                </Grid.Col>
              </Grid>
            </>
          )}
        </div>
      </Layout>
    </>
  );
};

export default portfolio;
