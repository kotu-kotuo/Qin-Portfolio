import { Footer } from "@mantine/core";
import Link from "next/link";
import React, { FC, ReactNode } from "react";
type LayoutProps = {
  children: ReactNode;
};
import { slide as Menu } from "react-burger-menu";
import Header from "src/components/Layout/Header";
import { useViewportSize } from "src/lib/mantine";

export const Layout: FC<LayoutProps> = ({ children }) => {
  const { width } = useViewportSize();

  return (
    <div className="contain w-full">
      <Menu>
        <div className="flex flex-col font-main">
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

      <Header />

      <main className="mt-16">{children}</main>

      <Footer
        height={60}
        className="mt-16 py-6 text-center text-xs text-gray-600"
      >
        &copy; {new Date().getFullYear()} Shimabu IT University
      </Footer>
    </div>
  );
};
