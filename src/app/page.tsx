import Footer from "@/components/Footer";
import Header from "../components/Header";
import Advertising from "@/components/Advertising";
import AdvertisingMobile from "@/components/AdvertisingMobile";


export default function Home() {
  return (
   <main>
    <Advertising/>
    <Header/>
    <div className="h-[90px] lg:h-[94px] flex items-center lg:justify-center p-[14px] shadow-md border-t-2 ">
      <h1 className="text-2xl lg:text-[28px] font-bold lg:w-3/4">Catálogo</h1>
    </div>
    <section>
      <h2>Resultados</h2>
    </section>
    <Footer/>
    <AdvertisingMobile />
   </main>
  )
}
