import React from "react";
import { useMediaQuery } from "src/lib/mantine";
import Link from "next/link";
import { Menu2, Moon } from "tabler-icons-react";
import { Header as HeaderMantine, Title } from "@mantine/core";

const headerNavLink = [
  {
    link: "/about",
    text: "About",
  },
  {
    link: "/blog",
    text: "Blog",
  },
  {
    link: "/portfolio",
    text: "Portfolio",
  },
  {
    link: "/contact",
    text: "Contact",
  },
];

const Header = () => {
  const largerThanSM = useMediaQuery("sm");

  return largerThanSM ? (
    // PCヘッダー
    <HeaderMantine fixed={true} height={64} className="pt-[18px]">
      <div className="mx-auto flex max-w-screen-md items-center justify-between border-none sm:px-4 md:px-0">
        <Link href="/" className="block">
          <a className="no-underline">
            <Title order={1} className="font-main text-lg text-light">
              Shimabu IT University
            </Title>
          </a>
        </Link>
        <nav className="flex gap-x-4 font-main text-lg font-bold">
          {headerNavLink.map(({ link, text }) => (
            <Link href={link} key={text}>
              <a className="text-light no-underline">{text}</a>
            </Link>
          ))}
          {/* <div className="-m-[1px] block rounded-md border border-solid border-gray-900 px-1 pt-1 leading-none text-gray-900">
            <Moon size={20} strokeWidth={2} />
          </div> */}
        </nav>
      </div>
    </HeaderMantine>
  ) : (
    //  モバイルヘッダー
    <HeaderMantine
      fixed={true}
      height={64}
      className="flex items-center justify-between border-none px-4 md:hidden"
    >
      <Menu2 size={24} strokeWidth={2} className="text-transparent" />
      <Link href="/">
        <a className="no-underline">
          <Title order={1} className="font-main text-lg  text-light">
            Shimabu IT University
          </Title>
        </a>
      </Link>
      <div className="-m-1 rounded-md border border-solid border-gray-900 px-1 pt-1 pb-0.5 leading-none text-light">
        <Moon size={20} strokeWidth={2} />
      </div>
    </HeaderMantine>
  );
};

export default Header;
