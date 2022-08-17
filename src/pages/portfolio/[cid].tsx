import { NextPage } from "next";
import React from "react";
import Headline from "src/components/Headline";

const PortfolioContent: NextPage = () => {
  return (
    <>
      <div className="headline-wrapper">
        <Headline title="Portfolio" />
      </div>
      <div className="wrapper">
        <img
          src="https://source.unsplash.com/random?q=60"
          alt="画像"
          className="aspect-video w-full object-cover"
        />
        <div className="my-4 text-xl font-bold text-gray-900">IT KINGDOM</div>
        <p className="mb-4 text-xs font-bold text-gray-400">
          2021.10 - 2021.12
        </p>
        <p
          className="my-2 text-gray-900"
          dangerouslySetInnerHTML={{
            __html:
              "当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。使用技術とかこだわりのポイントとか書いてもいいかもですね。まっ白な、あのさっきの北の十字架のようにうつくしくかがやいて見えました。走るときはまるで鼠のような実もちらっと見えたのでした。青年はぞくっとしているのでした。",
          }}
        />
      </div>
    </>
  );
};

export default PortfolioContent;
