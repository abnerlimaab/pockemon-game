import { useState } from "react";

import { PokemonForm } from "../../services";

import {
  Back,
  Container,
  Flipper,
  Front,
  Image,
  ImageContainer,
  PokeBallImage,
} from "./styles";

import PokeBall from "../../assets/pokeball-pokemon.svg";

interface Props {
  pokemon: PokemonForm;
  onClick: (id: number) => void;
}

const Card = ({ pokemon, onClick }: Props) => {
  const [show, setShow] = useState(false);

  const handleClick = () => {
    setShow(!show);
    onClick(pokemon?.id);
  };

  return (
    <Container show={show}>
      <Flipper onClick={handleClick}>
        <Back>
          <ImageContainer>
            <Image src={pokemon?.sprites?.front_default} alt={pokemon?.pokemon?.name} />
          </ImageContainer>
        </Back>

        <Front>
          <PokeBallImage src={PokeBall} alt="pokemon image" />
        </Front>
      </Flipper>
    </Container>
  );
};

export default Card;
