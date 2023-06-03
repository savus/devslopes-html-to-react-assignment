import { CharacterCard } from "./CharacterCard";
export function CharacterSection({ data }) {
    return (
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
    );
}