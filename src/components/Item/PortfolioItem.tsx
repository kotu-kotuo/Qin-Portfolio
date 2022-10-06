import Link from "next/link";
import dayjs from "dayjs";
import { PortfolioProps } from "src/types/types";

const PortfolioItem = (props: PortfolioProps) => {
  return (
    <Link href={`/portfolio/${props.id}`}>
      <a className="no-underline">
        <img
          src={props.featuredImage.url}
          alt="画像"
          className="aspect-video w-full object-cover"
        />
        <div className="my-4 text-xl font-bold text-light">{props.title}</div>
        <p className="my-2 text-gray-300 line-clamp-3">
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
