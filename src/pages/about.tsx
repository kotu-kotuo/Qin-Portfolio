import { Title } from "@mantine/core";
import { NextPage } from "next";
import Headline from "src/components/Element/Headline";

const About: NextPage = () => {
  return (
    <>
      <div className="headline-wrapper">
        <Headline title="About" />
      </div>
      <div className="wrapper">
        <Title className="text-xl font-semibold text-light">
          Lightsound Shimabu
        </Title>
        <p className="text-gray-300">
          ITエンジニアYouTuber。神戸大学経営学部卒。未経験から独学でプログラミングを勉強し、新卒でヤフーに入社。2019年に株式会社GameHintを創業。
        </p>
      </div>
    </>
  );
};

export default About;
