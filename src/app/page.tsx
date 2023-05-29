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
      <section className="p-7 lg:p-[34px]">
        <h2 className="text-xl font-semibold lg:text-2xl">Resultados</h2>
        <ul>
          {families.map((familie) => (
            <li key={familie.id}>
              <Image
                alt={familie.details.name}
                src={`https://plugin-storage.nyc3.digitaloceanspaces.com/families/images/${familie.id}.jpg`}
                width={100}
                height={100}
              />
              <span>{familie.details.name}</span>
            </li>
          ))}
        </ul>
      </section>
      <Footer />
      <AdvertisingMobile />
    </main>
  );
}
