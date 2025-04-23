"use client";

import { cn, getBaseUrl } from "@/lib/utils";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

export function Randomizer({
  apiPath,
  buttonClassName,
  itemClassName,
  searchButtonClassName,
}: {
  apiPath: string;
  buttonClassName?: string;
  itemClassName?: string;
  searchButtonClassName?: string;
}) {
  const [items, setItems] = useState<string[]>([]);
  const [item, setItem] = useState("");

  const refreshItem = useCallback(() => {
    setItem(items[Math.floor(Math.random() * items.length)]);
  }, [items]);

  useEffect(() => {
    async function getItemList() {
      const res = await fetch(`${getBaseUrl()}${apiPath}`);

      if (res.status !== 200) {
        console.log("Invalid status code");
      }

      setItems((await res.json()) as string[]);
    }

    getItemList();
  }, [apiPath]);

  useEffect(() => {
    refreshItem();

    document.addEventListener("keydown", (e) => {
      if (e.key === " ") {
        refreshItem();
      }
    });
  }, [refreshItem]);

  return (
    <>
      <span
        className={cn(
          "lg:text-5xl max-w-4xl text-5xl min-h-96 lg:min-h-48 font-medium block",
          itemClassName
        )}
      >
        {item}
      </span>
      <div className="flex gap-4 flex-col lg:flex-row">
        <button
          onClick={refreshItem}
          className={cn(
            "py-2 px-6 transition-colors rounded-lg w-full border lg:w-fit",
            buttonClassName
          )}
        >
          PRÓXIMO
        </button>
        <Link
          href={`https://google.com/search?q=${item}`}
          target="_blank"
          rel="noopener noreferrer"
          className={cn(
            "py-2 px-6 transition-colors block text-center rounded-lg w-full lg:w-fit",
            searchButtonClassName
          )}
        >
          PESQUISAR
        </Link>
      </div>
    </>
  );
}
