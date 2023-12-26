import { component, fields } from '@keystatic/core';
import { TwitterEmbed, YouTubeEmbed } from '@ui/components';
import Image from 'next/image';

export const ComponentBlocks = {
  youtubeEmbed: component({
    label: 'YouTube Embed',
    preview: (props) => {
      const youtubeLink = props.fields.youtubeLink.value;
      return youtubeLink ? <YouTubeEmbed youtubeLink={youtubeLink} /> : null;
    },
    schema: {
      youtubeLink: fields.url({
        label: 'YouTube URL',
      }),
    },
  }),
  twitterEmbed: component({
    label: 'Tweet Embed',
    preview: (props) => {
      const tweetId = props.fields.tweet.value
        ? props.fields.tweet.value.split('/status/')[1].split('?')[0]
        : '';

      return <TwitterEmbed tweetId={tweetId} />;
    },
    schema: {
      tweet: fields.url({
        label: 'Tweet URL',
      }),
    },
  }),
  image: component({
    label: 'Image',
    preview: (props) => (
      <Image
        src={props.fields.src.value}
        alt={props.fields.alt.value}
        width={props.fields.width.value ?? 400}
        height={props.fields.height.value ?? 200}
      />
    ),
    schema: {
      src: fields.text({
        label: 'Image URL',
        validation: { length: { min: 4 } },
      }),
      alt: fields.text({
        label: 'Alt text',
        validation: { length: { min: 4 } },
      }),
      width: fields.integer({ label: 'Width' }),
      height: fields.integer({ label: 'Height' }),
    },
  }),
};
