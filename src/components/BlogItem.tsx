import Link from "next/link";
import React from "react";

const BlogItem = () => {
  return (
    <Link href="/blog/contentID">
      <a className="no-underline">
        <div className="mb-8 px-4">
          <div className="text-xl font-bold text-gray-900">
            This is a header
          </div>
          <p className="my-1.5 mb-1 text-base text-gray-900  line-clamp-2">
            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
            sint. Velit officia consequat duis enim velit mollit.
          </p>
          <time className="text-sm font-bold text-gray-400">2022.07.11</time>
        </div>
      </a>
    </Link>
  );
};

export default BlogItem;
