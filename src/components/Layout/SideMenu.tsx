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
        {menuList.map((menu) => (
          <ScrollLink
            to={menu}
            smooth
            duration={400}
            offset={-40}
            onSetActive={(id) => setIsActiveScroll(id)}
            spy={true}
          >
            <li className="flex items-center transition">
              <div
                className={
                  isActiveScroll === menu ? "diamond mr-2" : "w-[5.5px]"
                }
              ></div>
              <div
                className={`${
                  isActiveScroll === menu
                    ? "cursor-default font-bold text-light"
                    : "cursor-pointer rounded-lg px-3 hover:bg-gray-50/10"
                } py-1.5`}
              >
                {menu.charAt(0).toUpperCase() + menu.slice(1)}
              </div>
            </li>
          </ScrollLink>
        ))}
        {/* <li className="flex items-center">
          <div className="diamond mr-2"></div>
          <div className="cursor-default py-1.5 font-bold text-light">Home</div>
        </li>
        <ScrollLink to="about" smooth duration={400} offset={-40}>
          <li className="flex items-center">
            <div className="w-[5.5px]"></div>
            <div className="cursor-pointer rounded-lg px-3 py-1.5 transition hover:bg-gray-50/10">
              About
            </div>
          </li>
        </ScrollLink>
        <ScrollLink to="skill" smooth duration={400} offset={-40}>
          <li className="flex items-center">
            <div className="w-[5.5px]"></div>
            <div className="cursor-pointer rounded-lg px-3 py-1.5 transition hover:bg-gray-50/10">
              Skill
            </div>
          </li>
        </ScrollLink>
        <ScrollLink
          to="work"
          smooth
          duration={400}
          offset={-40}
          onSetActive={(id) => setIsActiveScroll(id)}
          spy={true}
        >
          <li className="flex items-center transition">
            <div
              className={
                isActiveScroll === "work" ? "diamond mr-2" : "w-[5.5px]"
              }
            ></div>
            <div className="cursor-pointer rounded-lg px-3 py-1.5 hover:bg-gray-50/10">
              Work
            </div>
          </li>
        </ScrollLink>
        <ScrollLink
          to="blog"
          smooth
          duration={400}
          offset={-40}
          onSetActive={(id) => setIsActiveScroll(id)}
          spy={true}
        >
          <li className="flex items-center">
            <div className="w-[5.5px]"></div>
            <div className="cursor-pointer rounded-lg px-3 py-1.5 transition hover:bg-gray-50/10">
              Blog
            </div>
          </li>
        </ScrollLink>
        <ScrollLink to="github" smooth duration={400} offset={-40}>
          <li className="flex items-center">
            <div className="w-[5.5px]"></div>
            <div className="cursor-pointer rounded-lg px-3 py-1.5 transition hover:bg-gray-50/10">
              Github
            </div>
          </li>
        </ScrollLink>
        <ScrollLink to="twitter" smooth duration={400} offset={-40}>
          <li className="flex items-center">
            <div className="w-[5.5px]"></div>
            <div className="cursor-pointer rounded-lg px-3 py-1.5 transition hover:bg-gray-50/10">
              Twitter
            </div>
          </li>
        </ScrollLink>
        <ScrollLink to="contact" smooth duration={400} offset={-40}>
          <li className="flex items-center">
            <div className="w-[5.5px]"></div>
            <div className="cursor-pointer rounded-lg px-3 py-1.5 transition hover:bg-gray-50/10">
              Contact
            </div>
          </li>
        </ScrollLink> */}
      </ul>
    </nav>
  );
};

export default SideMenu;
