import { graphql } from "@octokit/graphql";
import {
  LanguageEdge,
  RepositoryEdge,
  RepositoryLanguagesArgs,
  RepositoryProjectsV2Args,
  User,
} from "@octokit/graphql-schema";
import { NextApiRequest, NextApiResponse } from "next";

export default async function getRepositories(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const graphqlWithAuth = graphql.defaults({
      headers: {
        authorization: `token ${process.env.GITHUB_ACCESS_TOKEN}`,
      },
    });

    const repositories = await graphqlWithAuth<{
      user: User;
      // user: User & {
      //   repositories: RepositoryProjectsV2Args & {
      //     edges: RepositoryEdge[] &
      //       {
      //         node: {
      //           languages: RepositoryLanguagesArgs & { edges: LanguageEdge[] };
      //         };
      //       }[];
      //   };
      // };
    }>(`
    {
    user(login: "kotu-kotuo"){
    repositories(first: 3, orderBy: {field:UPDATED_AT,direction:DESC}){
      edges{
        node{
          name
          description
          stargazerCount
          forkCount
          updatedAt
          languages(first: 100, orderBy: {field:SIZE, direction:DESC}){
            totalSize
            edges {
              size
              node {
                color
                id
                name
              }
            }
          }
        }
      }
    }
  }
}
  `);

    res.status(200).json(repositories);
  } catch (error) {
    console.error(error);
    res.statusCode = 500;
  }
}
