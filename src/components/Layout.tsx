import { Footer, Header, Title } from "@mantine/core";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { Menu2, Moon } from "tabler-icons-react";
type LayoutProps = {
  children: ReactNode;
};
import { slide as Menu } from "react-burger-menu";
import { useViewportSize } from "src/lib/mantine";

const Layout: FC<LayoutProps> = ({ children }) => {
  const { width } = useViewportSize();

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

      {width < 768 ? (
        //  モバイルヘッダー
        <Header
          fixed={true}
          height={64}
          className="flex items-center justify-between border-none px-4 md:hidden"
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
      ) : (
        // PCヘッダー
        <Header fixed={true} height={64} className="pt-[18px]">
          <div className="mx-auto flex max-w-screen-md items-center justify-between border-none sm:px-4 lg:px-0">
            <Link href="/" className="block">
              <a className="no-underline">
                <Title order={1} className="text-lg text-gray-900">
                  Shimabu IT University
                </Title>
              </a>
            </Link>
            <div className="flex gap-x-4 text-lg font-bold text-gray-900">
              <div>About</div>
              <div>Blog</div>
              <div>Portfolio</div>
              <div>Contact</div>
              <div className="-m-[1px] block rounded-md border border-solid border-gray-900 px-1 pt-1 leading-none text-gray-900">
                <Moon size={20} strokeWidth={2} />
              </div>
            </div>
          </div>
        </Header>
      )}

      <main className="mt-16 flex-1">{children}</main>

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
