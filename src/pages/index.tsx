import {
  AppShell,
  Center,
  Container,
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
