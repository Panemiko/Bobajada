"use client";

import { useCallback, useEffect, useState } from "react";

export function GameDisplay({ gamesList }: { gamesList: string[] }) {
  const [game, setGame] = useState("");

  const refreshGame = useCallback(() => {
    setGame(gamesList[Math.floor(Math.random() * gamesList.length)]);
  }, [gamesList]);

  useEffect(() => {
    refreshGame();

    document.addEventListener("keydown", (e) => {
      if (e.key === " ") {
        refreshGame();
      }
    });
  }, [refreshGame]);

  return (
    <>
      <span className="text-5xl font-medium block text-zinc-50">{game}</span>
      <button onClick={refreshGame} className="text-zinc-400">
        PRÓXIMO
      </button>
    </>
  );
}
