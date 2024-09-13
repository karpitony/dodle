import HowToPlay from "./components/how-to-play/HowToPlay";
import Game from "./components/game/Game";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Content from "./components/Content";

function App() {
  return (
    <>
      <Header />

      <Content isMain>
        <Game />
        <HowToPlay />
      </Content>

      <Footer />
    </>
  );
}

export default App;
