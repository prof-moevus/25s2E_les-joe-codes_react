import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Allo bienvenue sur mon site</h1>
      <ul>
            <li><Link href={"/composant01"}>Composant 01</Link></li>
          <li><Link href={"/exos/semaine01/ex01"}>S1E1 : business card</Link></li>

      </ul>
    </div>
  );
}
