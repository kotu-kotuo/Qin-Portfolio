import React from "react";

const PortfolioItem = () => {
  return (
    <div className="mb-8">
      <img
        src="https://source.unsplash.com/random?q=60"
        alt="画像"
        className="aspect-video w-full object-cover"
      />
      <div className="my-4 text-xl font-bold text-gray-900">IT KINGDOM</div>
      <p className="text-gray-900 my-2">
        当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
      </p>
      <p className="text-sm font-bold text-gray-400 my-2">2021.10 - 2021.12</p>
    </div>
  );
};

export default PortfolioItem;
