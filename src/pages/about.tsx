import { Title } from "@mantine/core";
import { NextPage } from "next";
import React from "react";
import Headline from "src/components/Headline";
import Layout from "src/components/Layout";

const About: NextPage = () => {
  return (
    <>
      <Layout>
        <div className="headline-wrapper">
          <Headline title="About" />
        </div>
        <div className="wrapper">
          <Title className="text-xl font-semibold text-gray-900">
            Lightsound Shimabu
          </Title>
          <p className="text-gray-900">
            ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。
          </p>
        </div>
      </Layout>
    </>
  );
};

export default About;
