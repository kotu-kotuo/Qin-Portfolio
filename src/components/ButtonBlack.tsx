import Link from "next/link";
import React, { FC } from "react";
import { Button } from "src/lib/mantine";

type ButtonProps = {
  text: string;
  link: string;
  externalLink?: boolean;
};

const ButtonBlack: FC<ButtonProps> = ({ text, link, externalLink }) => {
  return (
    <div className="text-center">
      {externalLink ? (
        <Button className="rounded-full bg-gray-900 text-white">
          <a href={link} target="_blank" rel="noopener noreferrer" className="text-white no-underline">
            {text}
          </a>
        </Button>
      ) : (
        <Link href={`/${link}`}>
          <Button className="rounded-full bg-gray-900">
            <a>{text}</a>
          </Button>
        </Link>
      )}
    </div>
  );
};

export default ButtonBlack;
