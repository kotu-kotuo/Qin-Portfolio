import {
  AppShell,
  Center,
  Container,
  Footer,
  Group,
  Header,
  Progress,
  Text,
  Title,
} from "@mantine/core";
import type { NextPage } from "next";
import { Button, useMediaQuery, useViewportSize } from "src/lib/mantine";
import { Menu2, Moon } from "tabler-icons-react";
import { BsTwitter, BsFacebook, BsStar } from "react-icons/bs";
import { ImRss } from "react-icons/im";
import { BiGitRepoForked } from "react-icons/bi";
import Headline from "src/components/Headline";
import BlogItem from "src/components/BlogItem";
import ButtonBlack from "src/components/ButtonBlack";
import PortfolioItem from "src/components/PortfolioItem";
import GithubItem from "src/components/GithubItem";

const Home: NextPage = () => {
  const { width } = useViewportSize();
  const largerThanXs = useMediaQuery("xs");
  const largerThanSm = useMediaQuery("sm");
  const largerThanMd = useMediaQuery("md");
  const largerThanLg = useMediaQuery("lg");
  const largerThanXl = useMediaQuery("xl");

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

        <div className="wrapper">
          <PortfolioItem />
          <PortfolioItem />
          <PortfolioItem />
        </div>
        <ButtonBlack text="View All" />

        <Headline title="Github" />
        <div className="wrapper mb-8">
          <GithubItem/>
          <GithubItem/>
          <GithubItem/>
          <div className="text-lg font-bold text-gray-900">
            lightsound/nexst-tailwind
          </div>
          <p className="my-2 text-gray-600">Next.js starter template.</p>
          <div className="flex items-center gap-x-4">
            <div className="flex items-center gap-x-1">
              <BsStar className="text-sm text-gray-400" />
              <p className="my-0 text-xs font-bold text-gray-400">117</p>
            </div>
            <div className="flex items-center">
              <BiGitRepoForked className="text-sm text-gray-400" />
              <p className="my-0 text-xs font-bold text-gray-400">18</p>
            </div>
          </div>
          <Progress
            sections={[
              { value: 60, color: "#3178C6" },
              { value: 35, color: "#F1E05A" },
              { value: 5, color: "#EDEDED" },
            ]}
            my={6}
          />
          <div>
            <div className="flex flex-wrap gap-x-4">
              <div className="flex items-center gap-x-1">
                <div className="h-1.5 w-1.5 rounded-full bg-[#3178C6]"></div>
                <p className="my-0 text-xs font-bold text-gray-900">
                  TypeScript
                </p>
                <p className="my-0 text-xs font-bold text-gray-400">66.6%</p>
              </div>
              <div className="flex items-center gap-x-1">
                <div className="h-1.5 w-1.5 rounded-full bg-[#F1E05A]"></div>
                <p className="my-0 text-xs font-bold text-gray-900">
                  JavaScript
                </p>
                <p className="my-0 text-xs font-bold text-gray-400">30.0%</p>
              </div>
              <div className="flex items-center gap-x-1">
                <div className="h-1.5 w-1.5 rounded-full bg-[#EDEDED]"></div>
                <p className="my-0 text-xs font-bold text-gray-900">Other</p>
                <p className="my-0 text-xs font-bold text-gray-400">3.4%</p>
              </div>
            </div>
          </div>
        </div>
        <ButtonBlack text="View on GitHub" />

        <Headline title="Twitter" />
        <ButtonBlack text="View on Twitter" />

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
