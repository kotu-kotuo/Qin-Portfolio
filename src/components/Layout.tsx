import { Footer, Header, Title } from "@mantine/core";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { Menu2, Moon } from "tabler-icons-react";
type LayoutProps = {
  children: ReactNode;
};
import { slide as Menu } from "react-burger-menu";

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="body w-full">
      <Menu>
        <div className="flex flex-col">
          <Link href="/about">
            <a>About</a>
          </Link>
          <Link href="/blog">
            <a>Blog</a>
          </Link>
          <Link href="/portfolio">
            <a>Portfolio</a>
          </Link>
          <Link href="/contact">
            <a>Contact</a>
          </Link>
        </div>
      </Menu>

      <Header
        fixed={true}
        height={64}
        className="flex items-center justify-between border-none px-4"
      >
        <Menu2 size={24} strokeWidth={2} className="text-transparent" />
        <Link href="/">
          <a className="no-underline">
            <Title order={1} className="text-lg text-gray-900">
              Shimabu IT University
            </Title>
          </a>
        </Link>
        <div className="-m-1 rounded-md border border-solid border-gray-900 px-1 pt-1 pb-0.5 leading-none text-gray-900">
          <Moon size={20} strokeWidth={2} />
        </div>
      </Header>

      <main className="flex-1 mt-16">{children}</main>

      <Footer
        height={60}
        className="mt-16 py-6 text-center text-xs text-gray-600"
      >
        © ️2022 Shimabu IT University
      </Footer>
    </div>
  );
};

export default Layout;
