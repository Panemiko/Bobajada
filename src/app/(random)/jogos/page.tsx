import { Metadata } from "next";
import { Randomizer } from "../randomizer";

export const metadata: Metadata = {
  title: "Adivinhe o jogo",
};

export default async function Page() {
  return (
    <div className="min-h-screen py-40 lg:px-28 px-8 bg-purple-950 space-y-3">
      <span className="text-lg text-purple-300 mb-10 font-medium block">
        Jogo escolhido:
      </span>
      <Randomizer
        buttonClassName="text-purple-50 bg-purple-700 border-purple-800 hover:bg-purple-800 hover:border-purple-900 active:bg-purple-800"
        itemClassName="text-purple-50"
        apiPath="/api/game-list"
        searchButtonClassName="text-purple-300 hover:bg-purple-800 active:bg-purple-800 hover:text-purple-50 active:text-purple-50"
      />
    </div>
  );
}
