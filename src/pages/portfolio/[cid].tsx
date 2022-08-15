import { NextPage } from "next";
import React from "react";
import Headline from "src/components/Headline";
import Layout from "src/components/Layout";

const PortfolioContent: NextPage = () => {
  return (
    <>
      <Layout>
        <Headline title="Portfolio" />
        <div className="wrapper">
          <img
            src="https://source.unsplash.com/random?q=60"
            alt="画像"
            className="aspect-video w-full object-cover"
          />
          <div className="my-4 text-xl font-bold text-gray-900">IT KINGDOM</div>
          <p className="my-2 text-gray-900">
            当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
            <br />
            <br />
            使用技術とかこだわりのポイントとか書いてもいいかもですね
            <br />
            <br />
            まっ白な、あのさっきの北の十字架のようにうつくしくかがやいて見えました。走るときはまるで鼠のような実もちらっと見えたのでした。青年はぞくっとしているのでした。
          </p>
          <p className="my-2 text-sm font-bold text-gray-400">
            2021.10 - 2021.12
          </p>
        </div>
      </Layout>
    </>
  );
};

export default PortfolioContent;
