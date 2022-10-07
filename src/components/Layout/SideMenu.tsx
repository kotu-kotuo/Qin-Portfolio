import { FC } from "react";

const SideMenu: FC = () => {
  return (
    <nav>
      <ul className="list-none space-y-2 font-main">
        <li className="flex items-center">
          <div className="w-[5.5px]"></div>
          <div className="cursor-pointer rounded-lg px-3 py-2 transition hover:bg-gray-50/10">
            HOME
          </div>
        </li>
        <li className="flex items-center">
          <div className="diamond mr-2"></div>
          <div className="cursor-default font-bold text-light">HOME</div>
        </li>
        <li>ABOUT</li>
        <li>SKILL</li>
        <li>WORK</li>
        <li>GITHUB</li>
        <li>TWITTER</li>
        <li>CONTACT</li>
      </ul>
    </nav>
  );
};

export default SideMenu;
