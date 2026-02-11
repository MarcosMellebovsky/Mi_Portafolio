import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Proyectos from "./components/Proyectos/Proyectos";
import Habilidades from "./components/Habilidades/Habilidades";
import Contacto from "./components/Contacto/Contacto";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Proyectos />
      <Habilidades />
      <Contacto />
      <Footer />
    </div>
  );
}
