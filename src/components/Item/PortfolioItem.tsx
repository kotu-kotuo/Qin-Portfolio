import Link from "next/link";
import React from "react";
import dayjs from "dayjs";

type PortfolioProps = {
  contentID: string;
  title: string;
  featuredImage: any;
  content: string;
  startDate: string;
  endDate: string;
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
          {dayjs(props.startDate).format("YYYY.MM")}{" "}
          <span>{props.endDate ? "-" : "~"}</span>{" "}
          {dayjs(props.endDate).format("YYYY.MM")}
        </p>
      </a>
    </Link>
  );
};

export default PortfolioItem;
