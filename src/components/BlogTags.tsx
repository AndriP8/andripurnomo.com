interface BlogTagsProps {
  tags: string[];
  activeTagString?: string;
}

export function BlogTags({ tags, activeTagString = "" }: BlogTagsProps) {
  if (tags.length === 0) return null;

  const activeTagsArray = activeTagString ? activeTagString.split(",") : [];

  const toggleTag = (tag: string) => {
    const url = new URL(window.location.href);
    let newTags: string[];
    if (activeTagsArray.includes(tag)) {
      newTags = activeTagsArray.filter((t) => t !== tag);
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
        const isActive = activeTagsArray.includes(tag);
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
