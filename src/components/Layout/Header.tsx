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
          <Image src="/Qin-Neko.png" width={60} height={60} />
        </a>
      </Link>
      <Menu2 size={24} strokeWidth={2} className="text-transparent" />
    </HeaderMantine>
  );
};

export default Header;

// const headerNavLink = [
//   {
//     link: "/about",
//     text: "About",
//   },
//   {
//     link: "/blog",
//     text: "Blog",
//   },
//   {
//     link: "/portfolio",
//     text: "Portfolio",
//   },
//   {
//     link: "/contact",
//     text: "Contact",
//   },
// ];

// PCヘッダー
// <HeaderMantine fixed={true} height={64} className="pt-[18px]">
//   <div className="mx-auto flex max-w-screen-md items-center justify-between border-none sm:px-4 md:px-0">
//     <Link href="/" className="block">
//       <a className="no-underline">
//         <Title order={1} className="font-main text-lg text-light">
//           Shimabu IT University
//         </Title>
//       </a>
//     </Link>
//     <nav className="flex gap-x-4 font-main text-lg font-bold">
//       {headerNavLink.map(({ link, text }) => (
//         <Link href={link} key={text}>
//           <a className="text-light no-underline">{text}</a>
//         </Link>
//       ))}
//       <div className="-m-[1px] block rounded-md border border-solid border-gray-900 px-1 pt-1 leading-none text-gray-900">
//         <Moon size={20} strokeWidth={2} />
//       </div>
//     </nav>
//   </div>
// </HeaderMantine>
