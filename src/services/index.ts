export type PokemonForm = {
    id: number;
    pokemon: {
        name: string;
        url: string;
    };
    sprites: {
        front_default: string;
    }
}

export const getPokemonForm = async (id: number): Promise<PokemonForm> => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-form/${id}`);
    const data = await response.json();

    return data
};
