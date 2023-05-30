"use client";
import Footer from "@/components/Footer";
import Advertising from "@/components/Advertising";
import AdvertisingMobile from "@/components/AdvertisingMobile";
import Header from "@/components/Header";
import { IFamilies } from "@/interfaces/families";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {
  const [families, setFamilies] = useState<IFamilies>([]);
  const [page, setPage] = useState(1);

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

  const loadMore = (page: number) => {
    axios
      .get(
        `https://test-candidaturas-front-end.onrender.com/families?skip=${
          page * 10
        }&take=10`
      )
      .then((resposta) => {
        setFamilies([...families, ...resposta.data]);
        setPage(page + 1);
      })
      .catch((erro) => {
        console.log(erro);
      });
  };

  return (
    <main>
      <Advertising />
      <Header/>
      <div className="h-[90px] bg-gradient-to-r from-gradient-end to-gradient-start pt-1">
        <div className="flex h-full w-full flex-col justify-center bg-white p-[14px] shadow-md md:items-center lg:h-[94px]">
          <div className="md:w-3/4">
            <h1 className="text-2xl font-bold lg:text-[28px]">Catálogo</h1>
            <div className="h-[4px] w-[34px] rounded-full bg-gradient-to-r from-gradient-end to-gradient-start"></div>
          </div>
        </div>
      </div>
      <section className="flex min-h-screen w-full flex-col items-center px-[14px] py-3 lg:py-[34px]">
        <div className="md:w-3/4 ">
          <h2 className="mb-[18px] text-xl font-semibold lg:text-2xl">
            Resultados
          </h2>
          <ul className="flex flex-wrap justify-around gap-y-3">
            {families.map((family) => (
              <li
                key={family.id}
                className="flex h-[184px] w-[125px] flex-col items-center rounded-lg border-2 lg:h-[234px] lg:w-[176px]"
              >
                <Image
                  alt={family.details.name}
                  src={`https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${family.id}.jpg`}
                  width={100}
                  height={137}
                  className="familyImg lg:h-[190px]"
                />
                <div className="flex h-[50px] w-full items-center justify-center border-t-2 p-2">
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
          <div className="mt-3 flex w-full justify-center">
            <button
              className="h-12 rounded-lg bg-gradient-to-r from-gradient-end to-gradient-start p-3 text-white"
              onClick={() => loadMore(page)}
            >
              <span>Veja mais</span>
            </button>
          </div>
          {/* <button onClick={() => loadMore(page)}>See more</button> */}
        </div>
      </section>
      <Footer />
      <AdvertisingMobile />
    </main>
  );
}
