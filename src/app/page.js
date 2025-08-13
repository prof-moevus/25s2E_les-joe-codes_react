import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <h1 className="h-15 m-3 p-3 text-yellow-500 md:text-red-500 text-shadow-lg ring-2 ring-amber-500 dark:ring-blue-600">Allo bienvenue sur mon site</h1>
      <ul>
          <li><Link href={"/composant01"}>Composant 01</Link></li>
          <li><Link href={"/exos/semaine01/ex01"}>S1E1 : business card</Link></li>
      </ul>
    </>
  );
}
