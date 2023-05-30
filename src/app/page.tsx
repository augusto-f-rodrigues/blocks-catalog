"use client";
import Footer from "@/components/Footer";
import Header from "../components/Header";
import Advertising from "@/components/Advertising";
import AdvertisingMobile from "@/components/AdvertisingMobile";
import { useEffect, useState } from "react";
import { IFamilies } from "@/interfaces/families";
import axios from "axios";
import Image from "next/image";

export default function Home() {
  const [families, setFamilies] = useState<IFamilies>([]);

  useEffect(() => {
    axios
      .get<IFamilies>(
        "https://test-candidaturas-front-end.onrender.com/families?skip=0&take=10"
      )
      .then((resposta) => {
        setFamilies(resposta.data);
      })
      .catch((erro) => {
        console.log(erro);
      });
  }, []);

  return (
    <main>
      <Advertising />
      <Header />
      <div className="h-[90px] bg-gradient-to-r from-gradient-end to-gradient-start pt-1">
        <div className="flex h-full w-full flex-col justify-center bg-white p-[14px] shadow-md lg:h-[94px] lg:justify-center">
          <h1 className="text-2xl font-bold lg:text-[28px]">Catálogo</h1>
          <div className="h-[4px] w-[34px] rounded-full bg-gradient-to-r from-gradient-end to-gradient-start"></div>
        </div>
      </div>
      <section className="flex min-h-screen items-center flex-col px-7 py-3 lg:p-[34px]">
        <div className="lg:w-3/4">
          <h2 className="text-xl font-semibold lg:text-2xl">Resultados</h2>
          <ul className="flex flex-wrap justify-around gap-y-3">
            {families.map((family) => (
              <li
                key={family.id}
                className="flex h-[184px] w-[125px] flex-col items-center rounded-lg border-2"
              >
                <Image
                  alt={family.details.name}
                  src={`https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${family.id}.jpg`}
                  width={100}
                  height={137}
                  // className="h-full"
                />
                <div className="flex h-[50px] items-center justify-center border-t-2 w-full p-2">
                  <span className="w-[90px] overflow-hidden overflow-ellipsis whitespace-nowrap text-xs">
                    {family.details.name}
                  </span>
                  <div className="h-[30px] w-[2px] bg-cinza-borda"></div>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    />
                  </svg>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      <Footer />
      <AdvertisingMobile />
    </main>
  );
}
