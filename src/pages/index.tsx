import {
  AppShell,
  Center,
  Container,
  Footer,
  Group,
  Header,
  Text,
  Title,
} from "@mantine/core";
import type { NextPage } from "next";
import { Button, useMediaQuery, useViewportSize } from "src/lib/mantine";
import { Menu2, Moon } from "tabler-icons-react";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { ImRss } from "react-icons/im";
import Headline from "src/components/Headline";
import BlogItem from "src/components/BlogItem";
import ButtonBlack from "src/components/ButtonBlack";
import PortfolioItem from "src/components/PortfolioItem";

const Home: NextPage = () => {
  const { width } = useViewportSize();
  const largerThanXs = useMediaQuery("xs");
  const largerThanSm = useMediaQuery("sm");
  const largerThanMd = useMediaQuery("md");
  const largerThanLg = useMediaQuery("lg");
  const largerThanXl = useMediaQuery("xl");

  const handleClick = () => {
    console.log("Hello!");
  };

  return (
    <>
      <div className="w-full">
        <Header
          fixed={false}
          height={64}
          className="flex items-center justify-between border-none px-4"
        >
          <Menu2 size={24} strokeWidth={2} className="text-gray-900" />
          <Title order={1} className="text-lg text-gray-900">
            Shimabu IT University
          </Title>
          <div className="-m-1 rounded-md border border-solid border-gray-900 px-1 pt-1 pb-0.5 leading-none text-gray-900">
            <Moon size={20} strokeWidth={2} />
          </div>
        </Header>

        <div className="w-full bg-pink-600 px-4 py-10 text-white">
          <Group spacing={1}>
            <Title className="inline text-3xl">Shimabu IT University</Title>
            <Text className="inline text-base">
              しまぶーのポートフォリオのためのページです
            </Text>
          </Group>
          <Group className="mt-10">
            <BsTwitter />
            <BsFacebook />
            <ImRss />
          </Group>
        </div>

        <Headline title="Blog" />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <BlogItem />
        <ButtonBlack text="View All" />

        <Headline title="Portfolio" />

        <div className="mx-auto px-4">
          <PortfolioItem/>
          <PortfolioItem/>
          <PortfolioItem/>
          <img
            src="https://source.unsplash.com/random?q=60"
            alt="画像"
            className="aspect-video w-full object-cover"
          />
          <div className="text-xl text-gray-900 font-bold my-4">IT KINGDOM</div>
          <p className="text-gray-900">
            当サロンのLPページ。React、Next.js、TypeScriptなどのモダンな技術を用いて作られています。初心者にちょうど良い難易度の制作物です。
          </p>
          <p className="font-bold text-gray-400 text-sm">2021.10 - 2021.12</p>
        </div>

        <ButtonBlack text="View All" />

        <Headline title="Github" />

        <Headline title="Twitter" />

        <Footer height={60} className="py-6 text-center text-xs text-gray-600">
          © ️2022 Shimabu IT University
        </Footer>
      </div>

      {/* <AppShell
        className="w-full"
        header={
          <Header
            fixed={true}
            height={64}
            className="flex items-center justify-between border-none px-4"
          >
            <Menu2 size={24} strokeWidth={2} className="text-gray-900" />
            <Title order={1} className="text-lg text-gray-900">
              Shimabu IT University
            </Title>
            <div className="-m-1 rounded-md border border-solid border-gray-900 px-1 pt-1 pb-0.5 leading-none text-gray-900">
              <Moon size={20} strokeWidth={2} />
            </div>
          </Header>
        }
      >
        <div className="-mx-4 mt-16 w-full bg-pink-600">
          <Group className="text-white">
            <Title className="text-3xl">Shimabu IT University</Title>
            <Text className="text-base">
              しまぶーのポートフォリオのためのページです
            </Text>
          </Group>
        </div>
        <Center mt={65} className="bg-pink-600">
          <Group className="text-white">
            <Title className="text-3xl">Shimabu IT University</Title>
            <Text className="text-base">
              しまぶーのポートフォリオのためのページです
            </Text>
          </Group>
        </Center>
      </AppShell> */}
    </>
    // <div className="p-20">
    //   <div className="bg-fuchsia-200 xs:bg-red-200 sm:bg-amber-200 md:bg-lime-200 lg:bg-emerald-200 xl:bg-cyan-200">
    //     <div>{`width: ${width}`}</div>
    //     <div>{`largerThanXs: ${largerThanXs}`}</div>
    //     <div>{`largerThanSm: ${largerThanSm}`}</div>
    //     <div>{`largerThanMd: ${largerThanMd}`}</div>
    //     <div>{`largerThanLg: ${largerThanLg}`}</div>
    //     <div>{`largerThanXl: ${largerThanXl}`}</div>
    //   </div>
    //   <Button dent onClick={handleClick} className="mt-4 block">
    //     Click me!!!!!!!!!
    //   </Button>
    //   <Button onClick={handleClick} className="mt-4 block">
    //     Click me!
    //   </Button>
    // </div>
  );
};

export default Home;
