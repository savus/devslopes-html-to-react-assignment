import "./App.css";
import { data } from "../src/data/fma-data";
import { CharacterCard } from "./components/CharacterCard";
import { CharacterTable } from "./components/CharacterTable";

const sortedData = [...data].sort((a, b) => b.votes - a.votes);

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
        <CharacterTable data={sortedData} />
      </section>
      <section id="character-cards">
        {data.map((item) => {
          return (
            <CharacterCard
              name={item.name}
              nickName={item.nickName}
              imageUrl={item.imageUrl}
              background={item.background}
              key={item.name}
            />
          );
        })}
      </section>
    </>
  );
}

export default App;
