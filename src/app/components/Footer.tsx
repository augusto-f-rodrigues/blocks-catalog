import Link from "next/link";

export default function Footer() {
  return (
    <footer className="flex h-auto items-center justify-start bg-cinza-100 p-4 md:h-[65px] md:justify-center md:p-0">
      <ul className="flex flex-col gap-2 md:flex-row md:gap-6">
        <li>
          <Link href={"#"}>Sobre</Link>
        </li>
        <li>
          <Link href={"#"}>FAQ</Link>
        </li>
        <li>
          <Link href={"#"}>Termos de uso</Link>
        </li>
        <li>
          <Link href={"#"}>Política de privacidade</Link>
        </li>
      </ul>
    </footer>
  );
}
