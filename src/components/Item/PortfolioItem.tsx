import Link from "next/link";
import React from "react";

type PortfolioProps = {
  contentID: string;
  title: string;
  content: string;
  featuredImage: any;
};

const PortfolioItem = (props: PortfolioProps) => {
  return (
    <Link href={`/portfolio/${props.contentID}`}>
      <a className="no-underline">
        <img
          src={props.featuredImage.url}
          alt="画像"
          className="aspect-video w-full object-cover"
        />
        <div className="my-4 text-xl font-bold text-gray-900">
          {props.title}
        </div>
        <p className="my-2 text-gray-900 line-clamp-3">
          {props.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")}
        </p>
        <p className="my-2 text-sm font-bold text-gray-400">
          2021.10 - 2021.12
        </p>
      </a>
    </Link>
  );
};

export default PortfolioItem;
