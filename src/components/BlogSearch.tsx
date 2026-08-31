import { useState } from "react";

export function BlogSearch({ initialSearch = "" }: { initialSearch?: string }) {
  const [search, setSearch] = useState(initialSearch);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const url = new URL(window.location.href);
    if (search.trim()) {
      url.searchParams.set("q", search.trim());
    } else {
      url.searchParams.delete("q");
    }
    window.location.href = url.toString();
  };

  return (
    <form onSubmit={handleSubmit} className="w-full md:w-auto bg-white border-2 border-black p-1 shadow-hard-sm">
      <input
        type="text"
        name="q"
        placeholder="SEARCH_LOGS..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full md:w-64 bg-gray-100 border border-black px-3 py-2 font-mono text-sm focus:outline-none focus:bg-accent-pink placeholder-gray-500"
      />
    </form>
  );
}
