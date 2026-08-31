import { TwitterTweetEmbed } from 'react-twitter-embed';

type TwitterEmbedProps = {
  tweetId: string;
};

export const TweetEmbed = ({ tweetId }: TwitterEmbedProps) => {
  return <TwitterTweetEmbed tweetId={tweetId} />;
};
