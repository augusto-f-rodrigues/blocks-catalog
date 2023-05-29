import Image from "next/image";

export default function Header() {
  return (
    <header className="flex h-20 items-center justify-center">
      <Image alt="logo-blocks" src={"/logo.png"} width={146} height={54} />
    </header>
  );
}
