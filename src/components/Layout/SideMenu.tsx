import { Dispatch, FC, SetStateAction } from "react";
import { Link as ScrollLink } from "react-scroll";
import { menuList } from "src/utils/const";

type SideMenuProps = {
  isActiveScroll: string;
  setIsActiveScroll: Dispatch<SetStateAction<string>>;
};

const SideMenu: FC<SideMenuProps> = ({ isActiveScroll, setIsActiveScroll }) => {
  return (
    <nav>
      <ul className="list-none font-main text-gray-300">
        {menuList.map((menu) => {
          const active = isActiveScroll === menu;
          return (
            <ScrollLink
              to={menu}
              smooth
              duration={400}
              offset={-40}
              onSetActive={(id) => setIsActiveScroll(id)}
              spy={true}
              key={menu}
            >
              <li className="flex items-center transition">
                <div className={active ? "diamond mr-2" : "w-[5.5px]"}></div>
                <div
                  className={`${
                    active
                      ? "cursor-default font-bold text-light"
                      : "cursor-pointer rounded-lg px-3 hover:bg-gray-50/10"
                  } py-1.5`}
                >
                  {menu.charAt(0).toUpperCase() + menu.slice(1)} {/* 頭文字を大文字に */}
                </div>
              </li>
            </ScrollLink>
          );
        })}
      </ul>
    </nav>
  );
};

export default SideMenu;
