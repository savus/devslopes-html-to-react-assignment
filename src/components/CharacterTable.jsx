import { Component } from "react";
import { CharacterTableRow } from "./CharacterTableRow";
import "../character-rating.css";
import { data } from "../data/fma-data";

export class CharacterTable extends Component {
  render() {
    const sortedData = [...data].sort((a, b) => b.votes - a.votes);
    return (
      <table>
        <tr>
          <th>Name</th>
          <th>Skillset</th>
          <th>Votes</th>
        </tr>
        {sortedData
          .slice(0, 5)
          .map((item, itemIndex) => {
            const adjustedIndex = itemIndex + 1;
            const isEven = adjustedIndex % 2 === 0;
            return (
              <CharacterTableRow item={item} isEven={isEven} key={item.name} />
            );
          })}
      </table>
    );
  }
}
