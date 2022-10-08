import { FC } from "react";

const SideMenu: FC = () => {
  return (
    <nav>
      <ul className="list-none font-main text-gray-300">
        <li className="flex items-center">
          <div className="diamond mr-2"></div>
          <div className="cursor-default font-bold text-light py-1.5">Home</div>
        </li>
        <li className="flex items-center">
          <div className="w-[5.5px]"></div>
          <div className="cursor-pointer rounded-lg px-3 py-1.5 transition hover:bg-gray-50/10">
            About
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-[5.5px]"></div>
          <div className="cursor-pointer rounded-lg px-3 py-1.5 transition hover:bg-gray-50/10">
            Skill
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-[5.5px]"></div>
          <div className="cursor-pointer rounded-lg px-3 py-1.5 transition hover:bg-gray-50/10">
            Work
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-[5.5px]"></div>
          <div className="cursor-pointer rounded-lg px-3 py-1.5 transition hover:bg-gray-50/10">
            Blog
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-[5.5px]"></div>
          <div className="cursor-pointer rounded-lg px-3 py-1.5 transition hover:bg-gray-50/10">
            Github
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-[5.5px]"></div>
          <div className="cursor-pointer rounded-lg px-3 py-1.5 transition hover:bg-gray-50/10">
            Twitter
          </div>
        </li>
        <li className="flex items-center">
          <div className="w-[5.5px]"></div>
          <div className="cursor-pointer rounded-lg px-3 py-1.5 transition hover:bg-gray-50/10">
            Contact
          </div>
        </li>
      </ul>
    </nav>
  );
};

export default SideMenu;
