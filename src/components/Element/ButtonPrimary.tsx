import Link from "next/link";
import { FC } from "react";
import { Button } from "src/lib/mantine";

type ButtonProps = {
  text: string;
  link: string;
  externalLink?: boolean;
  type?: "button" | "submit" | "reset";
};

const ButtonPrimary: FC<ButtonProps> = ({ text, link, externalLink, type }) => {
  return externalLink ? (
    <Button
      className="rounded-full bg-light font-button text-dark no-underline"
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      component="a"
    >
      {text}
    </Button>
  ) : (
    <Link href={`/${link}`} passHref>
      <Button
        className="rounded-full bg-light font-button text-dark"
        component="a"
        type={type}
      >
        {text}
      </Button>
    </Link>
  );
};

export default ButtonPrimary;
