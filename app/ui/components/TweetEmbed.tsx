// Note: should use client component because the libs use hook https://github.com/saurabhnemade/react-twitter-embed/blob/master/src/components/TwitterTweetEmbed.tsx#L36C15-L36C15
'use client';
import { TwitterTweetEmbed } from 'react-twitter-embed';

type TwitterEmbedProps = {
  tweetId: string;
};

// TODO: add fallback for tweet embed, maybe we can create my own libs
export const TwitterEmbed = ({ tweetId }: TwitterEmbedProps) => {
  return <TwitterTweetEmbed tweetId={tweetId} />;
};
