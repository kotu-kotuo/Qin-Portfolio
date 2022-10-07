import { Footer } from "@mantine/core";
import Link from "next/link";
import { FC, ReactNode, useState } from "react";
type LayoutProps = {
  children: ReactNode;
};
import { slide as Menu, State } from "react-burger-menu";
import Header from "src/components/Layout/Header";
import SideMenu from "src/components/Layout/SideMenu";

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleMenuClick = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <div className="contain w-full bg-dark">
      <Menu
        isOpen={isOpen}
        onStateChange={(state: State) => setIsOpen(state.isOpen)}
      >
        <div className="flex flex-col font-main">
          <Link href="/about">
            <a onClick={handleMenuClick}>About</a>
          </Link>
          <Link href="/blog">
            <a onClick={handleMenuClick}>Blog</a>
          </Link>
          <Link href="/portfolio">
            <a onClick={handleMenuClick}>Portfolio</a>
          </Link>
          <Link href="/contact">
            <a onClick={handleMenuClick}>Contact</a>
          </Link>
        </div>
      </Menu>

      <Header />

      <div className="hidden sm:block">
        <div className="mx-auto flex max-w-screen-md pr-4">
          <div className="fixed flex h-screen items-center">
            <SideMenu />
          </div>
          <div className="w-1/4"></div>
          <main className="mt-16 ">{children}</main>
        </div>
      </div>

      <main className="mt-16 sm:hidden">{children}</main>

      <Footer
        height={60}
        className="mt-16 border-gray-600 bg-dark py-6 text-center text-xs text-gray-400"
      >
        &copy; {new Date().getFullYear()} Shimabu IT University
      </Footer>
    </div>
  );
};
