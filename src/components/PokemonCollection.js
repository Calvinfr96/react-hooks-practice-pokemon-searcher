import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonData, isLoaded }) {
  const pokemonCards = pokemonData.map(pokemon => {
    return <PokemonCard
      key={`pokemon-${pokemon.id}`}
      name={pokemon.name}
      hp={pokemon.hp}
      frontSprite={pokemon.sprites.front}
      backSprite={pokemon.sprites.back} />
  })

  if (!isLoaded) {
    return <h2>Loading...</h2>
  }
  return (
    <div>
      <h1>Hello From Pokemon Collection</h1>
      <Card.Group itemsPerRow={6}>
        {pokemonCards}
      </Card.Group>
    </div>
  );
}

export default PokemonCollection;
