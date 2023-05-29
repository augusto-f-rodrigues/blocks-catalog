import Footer from "@/components/Footer";
import Header from "../components/Header";
import Advertising from "@/components/Advertising";


export default function Home() {
  return (
   <main>
    <Advertising/>
    <Header/>
    <div className="h-[1000px]">
      <h1>Catálogo</h1>
    </div>
    <section>
      <h2>Resultados</h2>
    </section>
    <Footer/>
   </main>
  )
}
