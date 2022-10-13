import { Grid, Skeleton } from "@mantine/core";
import type { GetStaticProps, NextPage } from "next";
import { useMediaQuery } from "src/lib/mantine";
import Headline from "src/components/Element/Headline";
import BlogItem from "src/components/Item/BlogItem";
import ButtonPrimary from "src/components/Element/ButtonPrimary";
import PortfolioItem from "src/components/Item/PortfolioItem";
import GithubItem from "src/components/Item/GithubItem";
import TwitterItem from "src/components/Item/TwitterItem";
import { client } from "src/lib/client";
import { MicroCMSListResponse } from "microcms-js-sdk";
import { githubUrl, twitterUrl } from "src/utils/urls";
import useTwitter from "src/hooks/useTwitter";
import useGithub from "src/hooks/useGithub";
import { Blog, Portfolio, Tweet } from "src/types/types";
import Container from "src/components/Layout/Container";
import Image from "next/image";
import { skillList } from "src/utils/const";
import Contact from "src/components/Contact";

type HomeProps = {
  blogData: MicroCMSListResponse<Blog>;
  portfolioData: MicroCMSListResponse<Portfolio>;
};

const Home: NextPage<HomeProps> = (props) => {
  const largerThanSM = useMediaQuery("sm");
  const { twitterData } = useTwitter();
  const { repositories } = useGithub();

  return (
    <>
      {/* Home */}
      <Container className="mb-28 pt-48 sm:pt-40" id="home">
        <p className="tracking-wider text-primary">Hi! My name is</p>
        <h1 className="text-6xl font-bold text-light">Makoto Nonoyama</h1>
        <h2 className="mb-24 text-3xl font-bold text-gray-400">
          I&apos;m a would-be front-end engineer.
        </h2>
      </Container>

      {/* About */}
      <Container>
        <div className="headline-wrapper">
          <Headline title="About" id="about" />
        </div>
        <div className="sm:flex">
          <div className="-my-12 text-center sm:-mt-14 sm:-mb-20  sm:w-1/2">
            <Image
              src="/Qin-Neko.png"
              width={400}
              height={400}
              alt="Clip art of Neko sucked into box immediately"
            />
          </div>
          <div className="sm:w-1/2">
            <p className="text-light">
              After graduating from college, I worked at an Italian restaurant
              as a cooking assistant, but I resigned and am currently
              unemployed. <br />
              <br />
              I taught myself the front-end field and developed &quot;happy
              horse&quot;, a horse trading platform, and &quot;NonoTech&quot;, a
              technology blog using NotionAPI and Next.js. <br />
              <br /> I would like to continue to develop various products in the
              future, so I will devote myself to it every day!
            </p>
          </div>
        </div>
      </Container>

      {/* Skill */}
      <Container>
        <div className="headline-wrapper">
          <Headline title="Skill" id="skill" />
        </div>
        <Grid>
          {skillList.map((skill) => (
            <Grid.Col span={4} xs={3} sm={2} key={skill.title}>
              <div className="p-2 text-center">
                <skill.icon className="h-auto w-4/5 text-light" />
                <p>{skill.title}</p>
              </div>
            </Grid.Col>
          ))}
        </Grid>
      </Container>

      {/* Work */}
      <Container>
        <div className="headline-wrapper">
          <Headline title="Work" id="work" />
        </div>
        <Skeleton visible={largerThanSM === null}>
          {props.portfolioData.contents.map((content, index) => (
            <div
              className={`mt-4 ${
                props.portfolioData.contents.length !== index + 1
                  ? "mb-20"
                  : "mb-8"
              }`}
              key={index}
            >
              <PortfolioItem
                id={content.id}
                order={index + 1}
                title={content.title}
                content={content.content}
                featuredImage={content.featuredImage}
                technologies={content.technologies}
                siteLink={content.siteLink}
                githubLink={content.githubLink}
                publishedAt={content.publishedAt}
                createdAt={content.createdAt}
                updatedAt={content.updatedAt}
              />
            </div>
          ))}
        </Skeleton>
      </Container>

      {/* Blog */}
      <Container>
        <div className="headline-wrapper">
          <Headline title="Blog" id="blog" />
        </div>
        <ul className="my-0 list-none px-0">
          {props.blogData.contents.slice(0, 4).map((content) => (
            <li className="item-wrapper" key={content.id}>
              <BlogItem
                id={content.id}
                title={content.title}
                content={content.content}
                publishedAt={content.publishedAt}
                createdAt={content.createdAt}
                updatedAt={content.updatedAt}
              />
            </li>
          ))}
        </ul>
      </Container>

      {/* Github */}
      <Container>
        <div className="headline-wrapper">
          <Headline title="Github" id="github" />
        </div>
        <div className="mb-8">
          {repositories?.map((repository) => (
            <div className="item-wrapper" key={repository.node.name}>
              <GithubItem
                name={repository.node.name}
                description={repository.node.description}
                stargazerCount={repository.node.stargazerCount}
                forkCount={repository.node.forkCount}
                languages={repository.node.languages}
              />
            </div>
          ))}
        </div>
        <div className="text-center">
          <ButtonPrimary
            text="View on GitHub"
            link={githubUrl}
            externalLink={true}
          />
        </div>
      </Container>

      {/* Twitter */}
      <Container>
        <div className="headline-wrapper">
          <Headline title="Twitter" id="twitter" />
        </div>
        {twitterData?.recentSearch.data
          ? twitterData?.recentSearch.data.slice(0, 3).map((data: Tweet) => (
              <div className="item-wrapper" key={data.id}>
                <TwitterItem
                  data={data}
                  user={twitterData?.recentSearch.includes.users[0]}
                  userImage={twitterData?.user.profile_image_url}
                />
              </div>
            ))
          : null}
        <div className="text-center">
          <ButtonPrimary
            text="View on Twitter"
            link={twitterUrl}
            externalLink={true}
          />
        </div>
      </Container>

      <Container>
        <Contact />
      </Container>

      <div className="pt-6 text-center sm:pt-0">
        <Image
          src="/portfolio-bottom-art.png"
          width={540}
          height={540}
          alt="Clip art of girl zoning out in park while drinking"
        />
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
