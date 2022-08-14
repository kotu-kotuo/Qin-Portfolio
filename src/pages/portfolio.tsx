import React from "react";
import Headline from "src/components/Headline";
import Layout from "src/components/Layout";
import PortfolioItem from "src/components/PortfolioItem";

const portfolio = () => {
  return (
    <>
      <Layout>
        <Headline title="Portfolio" />
        <div className="wrapper">
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
        </div>
      </Layout>
    </>
  );
};

export default portfolio;
