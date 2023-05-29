import Footer from "@/components/Footer";
import Header from "../components/Header";
import Button from "@/components/Button";


export default function Home() {
  return (
   <main>
    <Button text="Quero ser Premium"/>
    <Header/>
    <div>
      <h1>Catálogo</h1>
    </div>
    <section>
      <h2>Resultados</h2>
    </section>
    <Footer/>
   </main>
  )
}
