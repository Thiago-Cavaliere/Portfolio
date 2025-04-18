import Pagina from "./assets/Paginas/Pagina";
import NavBar from "./assets/components/NavBar/NavBar";
import Sobre from "./assets/Paginas/Sobre";
import Projetos from "./assets/Paginas/Projetos";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./assets/style.css";

function App() {
  return (
    <>
      <NavBar />
      <Pagina />
      <Sobre />
      <Projetos />
    </>
  );
}

export default App;
