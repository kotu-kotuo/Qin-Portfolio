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
        <div className="border-b-4 border-gray-600 px-4 pt-10 pb-6">
          <Title order={2} className="text-gray-900">
            Blog
          </Title>
          <hr className="border-b border-solid border-t-0 border-gray-200 opacity-80 mt-6"></hr>
        </div>
        <div>おおおおおおおお</div>
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
