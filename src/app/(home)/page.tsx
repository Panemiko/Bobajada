import Link from "next/link";

export default function Page() {
  return (
    <div>
      <header>
        <h1>Bobajada</h1>
      </header>
      <div>
        <ul>
          <Link href="/adivinhe-o-jogo">Adivinhe o jogo</Link>
        </ul>
      </div>
    </div>
  );
}
