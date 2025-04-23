import { Metadata } from "next";
import { Randomizer } from "../randomizer";

export const metadata: Metadata = {
  title: "Adivinhe a profissão",
};

export default async function Page() {
  return (
    <div className="min-h-screen py-40 lg:px-28 px-8 bg-blue-950 space-y-3">
      <span className="text-lg text-blue-300 mb-10 font-medium block">
        Profissão escolhida:
      </span>
      <Randomizer
        buttonClassName="text-blue-50 bg-blue-700 border-blue-800 hover:bg-blue-800 hover:border-blue-900 active:bg-blue-800"
        itemClassName="text-blue-50"
        apiPath="/api/occupations-list"
        searchButtonClassName="text-blue-300 hover:bg-blue-800 active:bg-blue-800 hover:text-blue-50 active:text-blue-50"
      />
    </div>
  );
}
