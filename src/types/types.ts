import { MicroCMSContentId, MicroCMSDate } from "microcms-js-sdk";

export type Blog = {
  id: string;
  title: string;
  content: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
};

export type BlogProps = Blog & MicroCMSContentId & MicroCMSDate;

export type Portfolio = {
  id: string;
  title: string;
  featuredImage: { url: string; height: number; width: number };
  content: string;
  startDate: string;
  endDate: string;
  publishedAt: string;
  createdAt: string;
  updatedAt: string;
};

export type PortfolioProps = Portfolio & MicroCMSContentId & MicroCMSDate;

export type Tweet = {
  author_id: string;
  created_at: string;
  id: string;
  text: string;
};

export type RepoData = {
  name: string;
  description?: string;
  stargazerCount: number;
  forkCount: number;
  updatedAt?: string;
  languages: {
    totalSize: number;
    edges: {
      size: number;
      node: {
        color: string;
        id: string;
        name: string;
      };
    }[];
  };
};

export type Repository = {
  node: RepoData;
};
