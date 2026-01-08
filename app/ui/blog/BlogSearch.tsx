"use client";

import { debounce, useQueryState } from "nuqs";

export function BlogSearch() {
  const [search, setSearch] = useQueryState("q", {
    defaultValue: "",
    shallow: false,
  });

  return (
    <div className="w-full md:w-auto bg-white border-2 border-black p-1 shadow-hard-sm">
      <input
        type="text"
        placeholder="SEARCH_LOGS..."
        value={search}
        onChange={(e) =>
          setSearch(e.target.value, {
            limitUrlUpdates: e.target.value === "" ? undefined : debounce(500),
          })
        }
        className="w-full md:w-64 bg-gray-100 border border-black px-3 py-2 font-mono text-sm focus:outline-none focus:bg-accent-pink placeholder-gray-500"
      />
    </div>
  );
}
