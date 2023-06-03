import "./App.css";
import { data } from "../src/data/fma-data";
import { CharacterTable } from "./components/CharacterTable";
import { CharacterSection } from "./components/CharacterSection";

function App() {
  return (
    <>
      <header>
        <h1>Fullmetal Alchemist</h1>
        <nav>
          <li>about us</li>
          <li>info</li>
          <li>support us</li>
        </nav>
      </header>
      <section id="character-ratings">
        <h4>Top Characters</h4>
        <CharacterTable />
      </section>
      <CharacterSection data={data} />
    </>
  );
}

export default App;
