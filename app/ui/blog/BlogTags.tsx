"use client";

import { useQueryState } from "nuqs";

interface BlogTagsProps {
  tags: string[];
}

export function BlogTags({ tags }: BlogTagsProps) {
  const [activeTags, setActiveTags] = useQueryState("tag", {
    defaultValue: "",
    shallow: false,
  });

  if (tags.length === 0) return null;

  const activeTagsArray = activeTags ? activeTags.split(",") : [];

  const toggleTag = (tag: string) => {
    if (activeTagsArray.includes(tag)) {
      // Remove tag
      const newTags = activeTagsArray.filter((t) => t !== tag);
      setActiveTags(newTags.length > 0 ? newTags.join(",") : null);
    } else {
      // Add tag
      const newTags = [...activeTagsArray, tag];
      setActiveTags(newTags.join(","));
    }
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
