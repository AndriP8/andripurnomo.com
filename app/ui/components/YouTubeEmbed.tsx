import { youtubeEmbedId } from '@lib/utils';
export const YouTubeEmbed = ({ youtubeLink }: { youtubeLink: string }) => {
  const embedId = youtubeEmbedId(youtubeLink);
  return (
    <div className="[&>iframe]:aspect-video [&>iframe]:w-full max-w-5xl mx-auto">
      <iframe
        src={`https://www.youtube.com/embed/${embedId}`}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        title="Youtube video player"
      />
    </div>
  );
};
