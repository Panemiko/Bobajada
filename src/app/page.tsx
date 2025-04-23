import { JoystickIcon, ThumbsDownIcon, Wallet2Icon } from "lucide-react";
import Link from "next/link";

export default function Page() {
  return (
    <div className="px-8 py-40 lg:px-28 bg-gray-950 min-h-screen space-y-3">
      <span className="text-lg text-gray-50 mb-10 font-medium block">
        Escolha o joguinho
      </span>

      <div className="grid lg:grid-cols-2 gap-7">
        <Link
          href="/jogos"
          className="text-purple-50 text-2xl font-bold flex h-fit justify-between gap-2 items-center bg-purple-700 w-full px-8 rounded-lg border border-purple-300 py-4 hover:bg-purple-800 transition-colors"
        >
          Jogos <JoystickIcon className="text-purple-400" />
        </Link>
        <Link
          href="/profissoes"
          className="text-blue-50 text-2xl font-bold flex h-fit justify-between gap-2 items-center bg-blue-700 w-full px-8 rounded-lg border border-blue-300 py-4 hover:bg-blue-800 transition-colors"
        >
          Profissões <Wallet2Icon className="text-blue-400" />
        </Link>
        <Link
          href="/animes"
          className="text-red-50 text-2xl font-bold flex h-fit justify-between gap-2 items-center bg-red-700 w-full px-8 rounded-lg border border-red-300 py-4 hover:bg-red-800 transition-colors"
        >
          Animes <ThumbsDownIcon className="text-red-400" />
        </Link>
      </div>
    </div>
  );
}
