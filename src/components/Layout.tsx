import { Footer, Header, Title } from "@mantine/core";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
import { Menu2, Moon } from "tabler-icons-react";
type LayoutProps = {
  children: ReactNode;
};

const Layout: FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full body">
      <Header
        fixed={false}
        height={64}
        className="flex items-center justify-between border-none px-4"
      >
        <Menu2 size={24} strokeWidth={2} className="text-gray-900" />
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

      <main className="flex-1">{children}</main>

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
