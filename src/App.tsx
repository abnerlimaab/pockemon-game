import { useEffect, useState } from "react";

import { PokemonForm, getPokemonForm } from "./services";

import Card from "./components/Card";
import Header from "./components/Header";

import { CardsContainer, Container } from "./styles";

const App = () => {
  const [cards, setCards] = useState([] as PokemonForm[]);

  const getARandomNumber = () => Math.floor(Math.random() * 999) + 1;

  useEffect(() => {
    const getCards = async () => {
      const pokemons = [] as PokemonForm[];

      for (let i = 0; i < 5; i++) {
        await getPokemonForm(getARandomNumber()).then((pokemon) => {
          if (pokemon.sprites.front_default === null) {
            i -= 1;
            return;
          }
          pokemons.push(pokemon, pokemon);
        });
      }

      setCards(pokemons);
    };

    getCards();
  }, []);

  return (
    <Container>
      <Header />

      <CardsContainer>
        {cards?.map((card, ind) => (
          <Card
            key={card?.pokemon?.name + ind}
            pokemon={card}
            onClick={console.log}
          />
        ))}
      </CardsContainer>
    </Container>
  );
};

export default App;
