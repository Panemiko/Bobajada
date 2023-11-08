import { GameDisplay } from "./game-display";

export default async function Page() {
  return (
    <div className="min-h-screen py-40 px-28 bg-zinc-800 space-y-3">
      <span className="text-lg text-zinc-300 font-medium block">
        Jogo escolhido:
      </span>
      <GameDisplay />
    </div>
  );
}
