import { Footer } from "@mantine/core";
import { FC, ReactNode, useState } from "react";
import { slide as Menu, State } from "react-burger-menu";
import Header from "src/components/Layout/Header";
import SideMenu from "src/components/Layout/SideMenu";
import { Link as ScrollLink } from "react-scroll";
import { menuList } from "src/utils/const";
import { useMediaQuery } from "src/lib/mantine";
import { useRouter } from "next/router";

type LayoutProps = {
  children: ReactNode;
};

export const Layout: FC<LayoutProps> = ({ children }) => {
  const largerThanSM = useMediaQuery("sm");
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleMenuClick = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [isActiveScroll, setIsActiveScroll] = useState<string>("");
  const isBlogPage = useRouter().pathname === "/blog/[cid]";

  return (
    <div className="contain w-full bg-dark">
      {/* ハンバーガーメニュー */}
      {!isBlogPage ? ( //ブログの時に非表示
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
                offset={largerThanSM ? -40 : -92}
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
      ) : null}

      <Header />

      {/* PCサイドメニュー + main */}
      <div className="sm:mx-auto sm:flex sm:max-w-screen-md sm:pr-4">
        <div className="fixed hidden h-screen items-center sm:flex">
          {!isBlogPage ? ( //ブログの時に非表示
            <SideMenu
              isActiveScroll={isActiveScroll}
              setIsActiveScroll={setIsActiveScroll}
            />
          ) : null}
        </div>
        <div
          className={`hidden  sm:block ${
            !isBlogPage ? "w-[300px] min-w-[150px]" : "w-0 pl-4"
          }`}
        ></div>
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
