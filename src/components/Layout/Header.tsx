import Link from "next/link";
import { Menu2 } from "tabler-icons-react";
import { Header as HeaderMantine } from "@mantine/core";
import { FC } from "react";
import Image from "next/image";

const Header: FC = () => {
  return (
    //  モバイルヘッダー
    <HeaderMantine
      fixed={true}
      height={64}
      className="flex items-center justify-between border-none px-4 sm:hidden"
    >
      <Link href="/">
        <a className="mt-0.5 no-underline">
          <Image
            src="/Qin-Neko.png"
            width={60}
            height={60}
            alt="Clip art of Neko sucked into box immediately"
          />
        </a>
      </Link>
      <Menu2 size={24} strokeWidth={2} className="text-transparent" />
    </HeaderMantine>
  );
};

export default Header;
