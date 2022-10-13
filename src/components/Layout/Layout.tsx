import { Footer } from "@mantine/core";
import { FC, ReactNode, useState } from "react";
import { slide as Menu, State } from "react-burger-menu";
import Header from "src/components/Layout/Header";
import SideMenu from "src/components/Layout/SideMenu";
import { Link as ScrollLink } from "react-scroll";
import { menuList } from "src/utils/const";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleMenuClick = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [isActiveScroll, setIsActiveScroll] = useState<string>("");

  return (
    <div className="contain w-full bg-dark">
      {/* ハンバーガーメニュー */}
      <Menu
        isOpen={isOpen}
        onStateChange={(state: State) => setIsOpen(state.isOpen)}
        right
      >
        <ul className="flex flex-col font-main">
          {menuList.map((menu) => (
            <ScrollLink
              to={menu}
              smooth
              duration={400}
              offset={-40}
              spy={true}
              key={menu}
            >
              <li
                onClick={handleMenuClick}
                className="cursor-pointer list-none"
              >
                <div>{menu.charAt(0).toUpperCase() + menu.slice(1)}</div>
              </li>
            </ScrollLink>
          ))}
        </ul>
      </Menu>

      <Header />

      {/* PCサイドメニュー + main */}
      <div className="sm:mx-auto sm:flex sm:max-w-screen-md sm:pr-4">
        <div className="fixed hidden h-screen items-center sm:flex">
          <SideMenu
            isActiveScroll={isActiveScroll}
            setIsActiveScroll={setIsActiveScroll}
          />
        </div>
        <div className="hidden w-[300px] min-w-[150px] sm:block"></div>
        <main>{children}</main>
      </div>

      <Footer
        height={60}
        className="mt-16 border-gray-600 bg-dark py-6 text-center text-xs text-gray-400"
      >
        &copy; {new Date().getFullYear()} Nono
      </Footer>
    </div>
  );
};
