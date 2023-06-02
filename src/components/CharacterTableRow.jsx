import "../character-rating.css";

export function CharacterTableRow({ item, isEven }) {
  const { name, skillset, votes } = item;
  return (
    <tr className={isEven ? "light" : "dark"} key={name}>
      <td>{name}</td>
      <td>{skillset.join(", ")}</td>
      <td>{votes}</td>
    </tr>
  );
}
