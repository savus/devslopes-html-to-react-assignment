import "../character-rating.css";

export function CharacterTableRow({ item, isEven }) {
  let skillSetStr = "";
  skillSetStr += [...item.skillset];
  return (
    <tr className={isEven ? "light" : "dark"} key={item.name}>
      <td>{item.name}</td>
      <td>{skillSetStr}</td>
      <td>{item.votes}</td>
    </tr>
  );
}
