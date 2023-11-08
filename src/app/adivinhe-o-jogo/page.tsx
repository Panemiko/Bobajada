import { getBaseUrl } from "@/lib/utils";
import { GameDisplay } from "./game-display";

export default async function Page() {
  const res = await fetch(`${getBaseUrl()}/api/game-list`);

  if (res.status !== 200) {
    return (
      <span>
        Ocorreu um erro, tente novamente mais tarde ou sei lá, conserta você
        mesmo
      </span>
    );
  }

  const gamesList = (await res.json()) as string[];

  return (
    <div className="min-h-screen py-40 px-28 bg-zinc-800 space-y-3">
      <span className="text-lg text-zinc-300 font-medium block">
        Jogo escolhido:
      </span>
      <GameDisplay gamesList={gamesList} />
    </div>
  );
}
