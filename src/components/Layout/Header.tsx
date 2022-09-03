import React from "react";
import { useMediaQuery } from "src/lib/mantine";
import Link from "next/link";
import { Menu2, Moon } from "tabler-icons-react";
import { Header as HeaderMantine, Title } from "@mantine/core";

const Header = () => {
  const sm = useMediaQuery("sm");

  return !sm ? (
    //  モバイルヘッダー
    <HeaderMantine
      fixed={true}
      height={64}
      className="flex items-center justify-between border-none px-4 md:hidden"
    >
      <Menu2 size={24} strokeWidth={2} className="text-transparent" />
      <Link href="/" passHref>
        <a className="no-underline">
          <Title order={1} className="font-main text-lg text-gray-900">
            Shimabu IT University
          </Title>
        </a>
      </Link>
      <div className="-m-1 rounded-md border border-solid border-gray-900 px-1 pt-1 pb-0.5 leading-none text-gray-900">
        <Moon size={20} strokeWidth={2} />
      </div>
    </HeaderMantine>
  ) : (
    // PCヘッダー
    <HeaderMantine fixed={true} height={64} className="pt-[18px]">
      <div className="mx-auto flex max-w-screen-md items-center justify-between border-none sm:px-4 md:px-0">
        <Link href="/" className="block">
          <a className="no-underline">
            <Title order={1} className="font-main text-lg text-gray-900">
              Shimabu IT University
            </Title>
          </a>
        </Link>
        <div className="flex gap-x-4 font-main text-lg font-bold text-gray-900">
          <Link href="/about">
            <a className="text-gray-900 no-underline">About</a>
          </Link>
          <Link href="/blog">
            <a className="text-gray-900 no-underline">Blog</a>
          </Link>
          <Link href="/portfolio">
            <a className="text-gray-900 no-underline">Portfolio</a>
          </Link>
          <Link href="/contact">
            <a className="text-gray-900 no-underline">Contact</a>
          </Link>
          <div className="-m-[1px] block rounded-md border border-solid border-gray-900 px-1 pt-1 leading-none text-gray-900">
            <Moon size={20} strokeWidth={2} />
          </div>
        </div>
      </div>
    </HeaderMantine>
  );
};

export default Header;
