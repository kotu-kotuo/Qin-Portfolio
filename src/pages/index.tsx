import { Grid, Group, Text, Title } from "@mantine/core";
import type { GetStaticProps, NextPage } from "next";
import { useMediaQuery } from "src/lib/mantine";
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
import { twitterUrl } from "src/lib/urls";
import useTwitter from "src/hooks/useTwitter";
import useGithub from "src/hooks/useGithub";

export type Blog = {
  title: string;
  content: string;
};

export type Portfolio = {
  title: string;
  featuredImage: { url: string; height: number; width: number };
  content: string;
  startDate: string;
  endDate: string;
};

export type Tweet = {
  author_id: string;
  created_at: string;
  id: string;
  text: string;
};

type HomeProps = {
  blogData: MicroCMSListResponse<Blog>;
  portfolioData: MicroCMSListResponse<Portfolio>;
  repositories: any;
};

const Home: NextPage<HomeProps> = (props) => {
  const largerThanSM = useMediaQuery("sm");
  const { twitterData } = useTwitter();
  const { repositories } = useGithub();

  console.log(repositories);

  return (
    <>
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
        {props.blogData.contents.slice(0, 4).map((content) => (
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
      <div className="buttonBlackSpace text-center">
        <ButtonBlack text="View All" link="blog" />
      </div>

      <div className="headline-wrapper">
        <Headline title="Portfolio" />
      </div>
      <div className="wrapper md:mx-auto">
        {!largerThanSM ? (
          // モバイルポートフォリオリスト
          <>
            {props.portfolioData.contents.slice(0, 3).map((content) => (
              <div className="item-wrapper" key={content.id}>
                <PortfolioItem
                  contentID={content.id}
                  title={content.title}
                  content={content.content}
                  featuredImage={content.featuredImage}
                  startDate={content.startDate}
                  endDate={content.endDate}
                />
              </div>
            ))}
          </>
        ) : (
          // PCポートフォリオリスト
          <>
            <Grid>
              {props.portfolioData.contents.slice(0, 6).map((content) => (
                <Grid.Col span={4} key={content.id}>
                  <div className="item-wrapper">
                    <PortfolioItem
                      contentID={content.id}
                      title={content.title}
                      content={content.content}
                      featuredImage={content.featuredImage}
                      startDate={content.startDate}
                      endDate={content.endDate}
                    />
                  </div>
                </Grid.Col>
              ))}
            </Grid>
          </>
        )}
      </div>
      <div className="buttonBlackSpace  text-center">
        <ButtonBlack text="View All" link="portfolio" />
      </div>

      <div className="gap-x-20 md:mx-auto md:flex md:max-w-screen-md">
        <div className="md:flex-1">
          <div className="headline-wrapper">
            <Headline title="Github" />
          </div>
          <div className="wrapper mb-8">
            {repositories?.map((repository) => (
              <div className="item-wrapper" key={repository.node.name}>
                <GithubItem repository={repository} />
              </div>
            ))}
          </div>
          <div className="buttonBlackSpace  text-center">
            <ButtonBlack
              text="View on GitHub"
              link="https://github.com/qin-salon/admin-dashboard-with-next-mantine"
              externalLink={true}
            />
          </div>
        </div>

        <div className="md:flex-1">
          <div className="headline-wrapper">
            <Headline title="Twitter (1week)" />
          </div>
          <div className="wrapper">
            {twitterData?.recentSearch.data
              ? twitterData?.recentSearch.data
                  .slice(0, 3)
                  .map((data: Tweet) => (
                    <div className="item-wrapper" key={data.id}>
                      <TwitterItem
                        data={data}
                        user={twitterData?.recentSearch.includes.users[0]}
                        userImage={twitterData?.user.profile_image_url}
                      />
                    </div>
                  ))
              : null}
          </div>
          <div className="buttonBlackSpace  text-center">
            <ButtonBlack
              text="View on Twitter"
              link={twitterUrl}
              externalLink={true}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const blogData = await client.getList<Blog>({ endpoint: "blog" });
  const portfolioData = await client.getList<Portfolio>({
    endpoint: "portfolio",
  });

  return {
    props: { blogData, portfolioData },
    revalidate: 100,
  };
};

export default Home;
