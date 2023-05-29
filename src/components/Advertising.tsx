"use client";
import Button from "./Button";

export default function Advertising() {
  return (
    <>
      <div
        className={`sticky top-0 hidden h-[67px] w-screen flex-row items-center justify-center gap-[18px] bg-cinza-800 p-6 text-[15px] text-lg lg:flex`}
      >
        <span className="text-white">
          Não limite sua criatividade, junte-se a familia Blocks por apenas{" "}
          <strong>BRL 19,99</strong>
        </span>
        <Button text="Quero ser Premium" />
      </div>
    </>
  );
}
