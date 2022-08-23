import { Grid, Group, Text, Title } from "@mantine/core";
import type { GetStaticProps, NextPage } from "next";
import { useViewportSize } from "src/lib/mantine";
import { BsTwitter, BsFacebook } from "react-icons/bs";
import { ImRss } from "react-icons/im";
import Headline from "src/components/Element/Headline";
import BlogItem from "src/components/Item/BlogItem";
import ButtonBlack from "src/components/Element/ButtonBlack";
import PortfolioItem from "src/components/Item/PortfolioItem";
import GithubItem from "src/components/Item/GithubItem";
import TwitterItem from "src/components/Item/TwitterItem";
import { client } from "src/lib/client";
import { MicroCMSListResponse } from "microcms-js-sdk";

export type Blog = {
  title: string;
  content: string;
};

const Home: NextPage<MicroCMSListResponse<Blog>> = (props) => {
  const { width } = useViewportSize();

  return (
    <>
      {console.log(props)}
      <div className="w-full bg-pink-600 px-4 py-10 text-white">
        <div className="md:mx-auto md:flex md:max-w-screen-md md:items-center md:justify-between">
          <div className="flex flex-col justify-start">
            <Title className="inline font-main text-3xl">
              Shimabu IT University
            </Title>

            <Text className="inline text-base">
              しまぶーのポートフォリオのためのページです
            </Text>
          </div>
          <Group className="mt-10 md:mt-0">
            <BsTwitter />
            <BsFacebook />
            <ImRss />
          </Group>
        </div>
      </div>

      <div className="headline-wrapper">
        <Headline title="Blog" />
      </div>
      <ul className="wrapper my-0 list-none">
        {props.contents.slice(0, 4).map((content) => (
          <li className="item-wrapper" key={content.id}>
            <BlogItem
              contentID={content.id}
              title={content.title}
              content={content.content}
              publishedAt={content.publishedAt}
            />
          </li>
        ))}
      </ul>
      <div className="text-center">
        <ButtonBlack text="View All" link="blog" />
      </div>

      <div className="headline-wrapper">
        <Headline title="Portfolio" />
      </div>
      <div className="wrapper md:mx-auto">
        {width < 768 ? (
          <>
            <div className="item-wrapper">
              <PortfolioItem />
            </div>
            <div className="item-wrapper">
              <PortfolioItem />
            </div>
            <div className="item-wrapper">
              <PortfolioItem />
            </div>
          </>
        ) : (
          <>
            <Grid>
              <Grid.Col span={4}>
                <div className="item-wrapper">
                  <PortfolioItem />
                </div>
              </Grid.Col>
              <Grid.Col span={4}>
                <div className="item-wrapper">
                  <PortfolioItem />
                </div>
              </Grid.Col>
              <Grid.Col span={4}>
                <div className="item-wrapper">
                  <PortfolioItem />
                </div>
              </Grid.Col>
              <Grid.Col span={4}>
                <div className="item-wrapper">
                  <PortfolioItem />
                </div>
              </Grid.Col>
              <Grid.Col span={4}>
                <div className="item-wrapper">
                  <PortfolioItem />
                </div>
              </Grid.Col>
              <Grid.Col span={4}>
                <div className="item-wrapper">
                  <PortfolioItem />
                </div>
              </Grid.Col>
            </Grid>
          </>
        )}
      </div>
      <div className="text-center">
        <ButtonBlack text="View All" link="portfolio" />
      </div>

      <div className="gap-x-20 md:mx-auto md:flex md:max-w-screen-md">
        <div className="md:flex-1">
          <div className="headline-wrapper">
            <Headline title="Github" />
          </div>
          <div className="wrapper mb-8">
            <div className="item-wrapper">
              <GithubItem />
            </div>
            <div className="item-wrapper">
              <GithubItem />
            </div>
            <div className="item-wrapper">
              <GithubItem />
            </div>
          </div>
          <div className="text-center">
            <ButtonBlack
              text="View on GitHub"
              link="https://github.com/qin-salon/admin-dashboard-with-next-mantine"
              externalLink={true}
            />
          </div>
        </div>

        <div className="md:flex-1">
          <div className="headline-wrapper">
            <Headline title="Twitter" />
          </div>
          <div className="wrapper">
            <div className="item-wrapper">
              <TwitterItem />
            </div>
            <div className="item-wrapper">
              <TwitterItem />
            </div>
            <div className="item-wrapper">
              <TwitterItem />
            </div>
          </div>
          <div className="text-center">
            <ButtonBlack
              text="View on Twitter"
              link="https://twitter.com/shimabu_it"
              externalLink={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const data = await client.getList<Blog>({ endpoint: "blog" });
  return {
    props: data,
  };
};

export default Home;
