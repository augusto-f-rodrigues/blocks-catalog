"use client"
import { useState } from "react";
import Button from "./Button";

function AdvertisingMobile() {
  const [hidden, setHidden] = useState(false);
  return (
    <div
        className={`sticky bottom-0 flex w-screen flex-col items-center justify-center gap-[18px] bg-cinza-800 p-6 text-[15px] lg:hidden ${
          hidden ? "hidden" : ""
        }`}
      >
        <button
          onClick={() => setHidden(true)}
          className="flex text-white"
        >
          Fechar{" "}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="h-6 w-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <span className="text-white">
          Não limite sua criatividade, junte-se a familia Blocks por apenas{" "}
          <strong>BRL 19,99</strong>
        </span>
        <Button text="Quero ser Premium" />
      </div>
  )
}

export default AdvertisingMobile