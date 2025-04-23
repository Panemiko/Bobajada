"use client";

import { cn, getBaseUrl } from "@/lib/utils";
import Link from "next/link";
import { useCallback, useEffect, useState } from "react";

interface Item {
  name: string;
  code?: string;
}

export function Randomizer({
  apiPath,
  buttonClassName,
  itemClassName,
  searchButtonClassName,
  searchEngine,
}: {
  apiPath: string;
  buttonClassName?: string;
  itemClassName?: string;
  searchButtonClassName?: string;
  searchEngine?: "google" | "mal";
}) {
  const [items, setItems] = useState<Item[]>([{ name: "" }]);
  const [item, setItem] = useState<Item>({ name: "" });

  const refreshItem = useCallback(() => {
    setItem(items[Math.floor(Math.random() * items.length)]);
  }, [items]);

  useEffect(() => {
    async function getItemList() {
      const res = await fetch(`${getBaseUrl()}${apiPath}`);

      if (res.status !== 200) {
        console.log("Invalid status code");
      }

      setItems((await res.json()) as Item[]);
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
        {item.name}
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
          href={
            searchEngine === "mal"
              ? `https://myanimelist.net/anime/${item.code}`
              : `https://www.google.com/search?q=${item.name}`
          }
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
