import { NextApiRequest, NextApiResponse } from "next";
import Client from "twitter-api-sdk";

export default async function getTweet(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    // Pass auth credentials to the library client
    const twitterClient = new Client(process.env.BEARER_TOKEN as string);

    const recentSearch = await twitterClient.tweets.tweetsRecentSearch({
      //One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length
      query: "(from:kotu_kotuo)",

      //A comma separated list of fields to expand.
      expansions: ["author_id"],

      //A comma separated list of User fields to display.s
      "tweet.fields": ["created_at"],

      //The maximum number of results
      max_results: 10,
    });

    const userName = "kotu_kotuo";
    // const { data } = await twitterClient.users.findUserByUsername(userName);

    // data.idにuserIdが格納されている
    // const tweets = twitterClient.tweets.usersIdTweets("1120285710668296198");

    // const tweet = await twitterClient.tweets.findTweetById(
    //   "1564895534397005825"
    // );
    // console.log(tweet);
    // console.log(tweets);
    res.status(200).json(recentSearch);
  } catch (err) {
    console.error(err);
    res.statusCode = 500;
  }
}
