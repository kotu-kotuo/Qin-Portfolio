import { Grid, Group, Progress, Text, Title } from "@mantine/core";
import type { NextPage } from "next";
import { useMediaQuery, useViewportSize } from "src/lib/mantine";
import { BsTwitter, BsFacebook, BsStar } from "react-icons/bs";
import { ImRss } from "react-icons/im";
import { BiGitRepoForked } from "react-icons/bi";
import Headline from "src/components/Headline";
import BlogItem from "src/components/BlogItem";
import ButtonBlack from "src/components/ButtonBlack";
import PortfolioItem from "src/components/PortfolioItem";
import GithubItem from "src/components/GithubItem";
import TwitterItem from "src/components/TwitterItem";
import Layout from "src/components/Layout";
import Link from "next/link";

const Home: NextPage = () => {
  const { width } = useViewportSize();
  const largerThanXs = useMediaQuery("xs");
  const largerThanSm = useMediaQuery("sm");
  const largerThanMd = useMediaQuery("md");
  const largerThanLg = useMediaQuery("lg");
  const largerThanXl = useMediaQuery("xl");

  return (
    <>
      <Layout>
        <div className="w-full bg-pink-600 px-4 py-10 text-white">
          <div className="md:mx-auto md:max-w-screen-md">
            <div className="flex flex-col justify-start">
              <Title className="inline font-main text-3xl">
                Shimabu IT University
              </Title>

              <Text className="inline text-base">
                しまぶーのポートフォリオのためのページです
              </Text>
            </div>
            <Group className="mt-10">
              <BsTwitter />
              <BsFacebook />
              <ImRss />
            </Group>
          </div>
        </div>

        <Headline title="Blog" />
        <div className="md:mx-auto md:max-w-screen-md">
          <BlogItem />
          <BlogItem />
          <BlogItem />
          <BlogItem />
        </div>
        <ButtonBlack text="View All" link="blog" />

        <Headline title="Portfolio" />
        <div className="wrapper md:mx-auto">
          {width < 768 ? (
            <>
              <PortfolioItem />
              <PortfolioItem />
              <PortfolioItem />
            </>
          ) : (
            <>
              <Grid>
                <Grid.Col span={4}>
                  <PortfolioItem />
                </Grid.Col>
                <Grid.Col span={4}>
                  <PortfolioItem />
                </Grid.Col>
                <Grid.Col span={4}>
                  <PortfolioItem />
                </Grid.Col>
                <Grid.Col span={4}>
                  <PortfolioItem />
                </Grid.Col>
                <Grid.Col span={4}>
                  <PortfolioItem />
                </Grid.Col>
                <Grid.Col span={4}>
                  <PortfolioItem />
                </Grid.Col>
              </Grid>
            </>
          )}
        </div>
        <ButtonBlack text="View All" link="portfolio" />

        <div className="gap-x-20 md:mx-auto md:flex md:max-w-screen-md">
          <div className="md:flex-1">
            <Headline title="Github" />
            <div className="wrapper mb-8">
              <GithubItem />
              <GithubItem />
              <GithubItem />
            </div>
            <ButtonBlack
              text="View on GitHub"
              link="https://github.com/qin-salon/admin-dashboard-with-next-mantine"
              externalLink={true}
            />
          </div>
          <div className="md:flex-1">
            <Headline title="Twitter" />
            <div className="wrapper ">
              <TwitterItem />
              <TwitterItem />
              <TwitterItem />
            </div>
            <ButtonBlack
              text="View on Twitter"
              link="https://twitter.com/shimabu_it"
              externalLink={true}
            />
          </div>
        </div>
      </Layout>
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
