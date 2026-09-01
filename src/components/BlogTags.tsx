interface BlogTagsProps {
  tags: string[];
  activeTagString?: string;
}

export function BlogTags({ tags, activeTagString = "" }: BlogTagsProps) {
  if (tags.length === 0) return null;

  const activeTagsArray = activeTagString
    ? activeTagString.split(",").map((t) => t.trim()).filter(Boolean)
    : [];

  const isTagActive = (tag: string) =>
    activeTagsArray.some((t) => t.toLowerCase() === tag.toLowerCase());

  const toggleTag = (tag: string) => {
    const url = new URL(window.location.href);
    let newTags: string[];
    if (isTagActive(tag)) {
      newTags = activeTagsArray.filter((t) => t.toLowerCase() !== tag.toLowerCase());
    } else {
      newTags = [...activeTagsArray, tag];
    }
    if (newTags.length > 0) {
      url.searchParams.set("tag", newTags.join(","));
    } else {
      url.searchParams.delete("tag");
    }
    window.location.href = url.toString();
  };

  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => {
        const isActive = isTagActive(tag);
        return (
          <button
            key={tag}
            onClick={() => toggleTag(tag)}
            className={`px-2 py-1 text-xs font-mono border border-black transition-colors ${
              isActive ? "bg-black text-white" : "bg-white hover:bg-accent-yellow"
            }`}
            type="button"
          >
            #{tag}
          </button>
        );
      })}
    </div>
  );
}
