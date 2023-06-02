import { Component } from "react";
import { CharacterTableRow } from "./CharacterTableRow";
import "../character-rating.css";

export class CharacterTable extends Component {
  render() {
    const { data } = this.props;
    return (
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
              <CharacterTableRow item={item} isEven={isEven} key={item.name} />
            );
        })}
      </table>
    );
  }
}
