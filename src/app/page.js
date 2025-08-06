import Image from "next/image";
import Link from "next/link";
export default function Home() {
  return (
    <div>
      <h1>Allo bienvenue sur mon site</h1>
      <ul>
        <li><Link href={"/composant01"}>Composant 01</Link></li>
      </ul>
    </div>
  );
}
