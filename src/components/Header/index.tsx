import Pokemon from "../../assets/pokemon.svg"

import { Container, Image, Title } from "./styles"

const Header = () => (
    <Container>
        <Image src={Pokemon} alt="pokemon" />

        <Title>MEMORY GAME</Title>
    </Container>
)

export default Header