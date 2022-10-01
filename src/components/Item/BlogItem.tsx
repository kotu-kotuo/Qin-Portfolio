import Link from "next/link";
import React from "react";
import { BlogProps } from "src/types/types";

const BlogItem = (props: BlogProps) => {
  return (
    <Link href={`/blog/${props.id}`}>
      <a className="no-underline">
        <div className="text-xl font-bold text-gray-900">{props.title}</div>
        <p className="my-1.5 mb-1 text-base text-gray-900  line-clamp-2">
          {props.content.replace(/<("[^"]*"|'[^']*'|[^'">])*>/g, "")}
        </p>
        <time className="text-sm font-bold text-gray-400">2022.07.11</time>
      </a>
    </Link>
  );
};

export default BlogItem;
