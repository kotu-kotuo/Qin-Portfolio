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
      className="rounded-full bg-light font-main text-dark no-underline transition hover:bg-primary"
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
        className="rounded-full bg-light font-main text-dark  transition hover:bg-primary"
        component="a"
        type={type}
      >
        {text}
      </Button>
    </Link>
  );
};

export default ButtonPrimary;
