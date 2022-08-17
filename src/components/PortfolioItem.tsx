import Link from "next/link";
import React from "react";

const PortfolioItem = () => {
  return (
    <Link href="/portfolio/contentID">
      <a className="no-underline">
        <img
          src="https://source.unsplash.com/random?q=60"
          alt="画像"
          className="aspect-video w-full object-cover"
        />
        <div className="my-4 text-xl font-bold text-gray-900">IT KINGDOM</div>
        <p className="my-2 text-gray-900">
          当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
        </p>
        <p className="my-2 text-sm font-bold text-gray-400">
          2021.10 - 2021.12
        </p>
      </a>
    </Link>
  );
};

export default PortfolioItem;
