import Link from "next/link";
import React, { FC } from "react";
import { Button } from "src/lib/mantine";

type ButtonProps = {
  text: string;
  link: string;
  externalLink?: boolean;
  type?: "button" | "submit" | "reset";
};

const ButtonBlack: FC<ButtonProps> = ({ text, link, externalLink, type }) => {
  return externalLink ? (
    <Button
      className="rounded-full bg-gray-900 font-button text-white no-underline"
      href={link}
      component="a"
    >
      {text}
    </Button>
  ) : (
    <Link href={`/${link}`} passHref>
      <Button
        className="rounded-full bg-gray-900 font-button"
        component="a"
        type={type}
      >
        {text}
      </Button>
    </Link>
  );
};

export default ButtonBlack;
