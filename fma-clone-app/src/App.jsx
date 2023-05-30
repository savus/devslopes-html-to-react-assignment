import "./App.css";
import { data } from "../src/data/fma-data";
import { CharacterTableRow } from "./components/CharacterTableRow";
import { CharacterCard } from "./components/CharacterCard";

data.sort((a,b) => b.votes - a.votes);

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
        <table>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
          {data.map((item, itemIndex) => {
            const adjustedIndex = itemIndex + 1;
            const isEven = adjustedIndex % 2 === 0;
            if (adjustedIndex <= 5)
              return (
                <CharacterTableRow
                  item={item}
                  isEven={isEven}
                  key={item.name}
                />
              );
          })}
        </table>
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
