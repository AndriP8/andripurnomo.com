"use client";

import { parseAsString, useQueryStates } from "nuqs";

export function ClearFilters() {
  const [, setFilters] = useQueryStates(
    {
      q: parseAsString.withDefault(""),
      tag: parseAsString.withDefault(""),
    },
    {
      shallow: false,
    },
  );

  const handleClear = () => {
    setFilters({ q: null, tag: null });
  };

  return (
    <button
      onClick={handleClear}
      className="px-3 py-1.5 text-xs font-mono font-bold bg-white border-2 border-black hover:bg-black hover:text-white transition-colors shadow-hard-sm"
      type="button"
    >
      ✕ CLEAR_FILTERS
    </button>
  );
}
