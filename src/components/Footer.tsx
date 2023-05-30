export default function Footer() {
  return (
    <footer className="flex h-auto items-center justify-start md:justify-center bg-cinza-100 p-4 md:h-[65px] md:p-0">
      <ul className="flex flex-col gap-2 md:flex-row md:gap-6">
        <li>Sobre</li>
        <li>FAQ</li>
        <li>Termos de uso</li>
        <li>Política de privacidade</li>
      </ul>
    </footer>
  );
}
