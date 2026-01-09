export function JsonLd({ data }: { data: object }) {
  return (
    <script
      type="application/ld+json"
      // biome-ignore lint/security/noDangerouslySetInnerHtml: JSON-LD requires innerHTML
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
