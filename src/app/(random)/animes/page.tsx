import { Metadata } from "next";
import { Randomizer } from "../randomizer";

export const metadata: Metadata = {
  title: "Adivinhe o anime",
};

export default async function Page() {
  return (
    <div className="min-h-screen py-40 lg:px-28 px-8 bg-red-950 space-y-3">
      <span className="text-lg text-red-300 mb-10 font-medium block">
        Anime escolhido:
      </span>
      <Randomizer
        buttonClassName="text-red-50 bg-red-700 border-red-800 hover:bg-red-800 hover:border-red-900 active:bg-red-800"
        itemClassName="text-red-50"
        apiPath="/api/anime-list"
        searchButtonClassName="text-red-300 hover:bg-red-800 active:bg-red-800 hover:text-red-50 active:text-red-50"
        searchEngine="mal"
      />
    </div>
  );
}
