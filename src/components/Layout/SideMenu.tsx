import { FC } from "react";

const SideMenu: FC = () => {
  return (
    <nav>
      <ul className="list-none space-y-2 font-main text-gray-300">
        <li className="flex items-center">
          <div className="w-[5.5px]"></div>
          <div className="cursor-pointer rounded-lg px-3 py-2 transition hover:bg-gray-50/10">
            Home
          </div>
        </li>
        <li className="flex items-center">
          <div className="diamond mr-2"></div>
          <div className="cursor-default font-bold text-light">Home</div>
        </li>
        <li>About</li>
        <li>Skill</li>
        <li>Work</li>
        <li>Github</li>
        <li>Twitter</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default SideMenu;
