"use client";

import { getBaseUrl } from "@/lib/utils";
import { useCallback, useEffect, useState } from "react";

export function GameDisplay() {
  const [games, setGames] = useState<string[]>([]);
  const [game, setGame] = useState("");

  const refreshGame = useCallback(() => {
    setGame(games[Math.floor(Math.random() * games.length)]);
  }, [games]);

  useEffect(() => {
    async function getGameList() {
      const res = await fetch(`${getBaseUrl()}/api/game-list`);

      if (res.status !== 200) {
        console.log("Invalid status code");
      }

      setGames((await res.json()) as string[]);
    }

    getGameList();
    refreshGame();

    document.addEventListener("keydown", (e) => {
      if (e.key === " ") {
        refreshGame();
      }
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <span className="text-5xl font-medium block text-zinc-50">{game}</span>
      <button onClick={refreshGame} className="text-zinc-400">
        PRÓXIMO
      </button>
    </>
  );
}
