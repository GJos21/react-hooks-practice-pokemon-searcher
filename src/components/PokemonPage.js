import React, { useState, useEffect } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemon, setPokemon] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetch(`http://localhost:3001/pokemon`)
      .then((resp) => resp.json())
      .then((items) => setPokemon(items));
  }, [])

  function handleNewPokemon(newPokemon) {
    setPokemon([...pokemon, newPokemon])
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onNewPokemon={handleNewPokemon} />
      <br />
      <Search searchTerm={searchTerm} onSearch={setSearchTerm} />
      <br />
      <PokemonCollection
        pokemon={searchTerm === "" ? pokemon : pokemon.filter((mon) => 
          mon.name.toUpperCase().includes(searchTerm.toUpperCase()))}
        
      />
    </Container>
  );
}

export default PokemonPage;
