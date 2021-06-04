import React from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";
import { useEffect } from "react";
import { useState } from "react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const baseURL = "  http://localhost:3001/pokemon";

  useEffect(() => {
    fetch(baseURL)
      .then(resp => resp.json())
      .then(data => {
        setPokemon(data)
        setIsLoaded(true)
      })
  }, []);

  function filterPokemon(searchInput) {
    const filteredPokemon = pokemon.filter(pokemon => pokemon.name.includes(searchInput));
    setPokemon(filteredPokemon)
  }

  function addPokemon(formData) {
    const configObj = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: formData.name,
        hp: formData.hp,
        sprites: {
          front: formData.front,
          back: formData.back
        }
      })
    }
    fetch(baseURL, configObj)
      .then(resp => resp.json())
      .then(newPokemon => {
        setPokemon([...pokemon, newPokemon])
      })
  }
  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm addPokemon={addPokemon} />
      <br />
      <Search filterPokemon={filterPokemon} />
      <br />
      <PokemonCollection pokemonData={pokemon} isLoaded={isLoaded} />
    </Container>
  );
}

export default PokemonPage;
