import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemon }) {
  return (
    <Card.Group itemsPerRow={6}>
      <h1>Hello From Pokemon Collection</h1>
      {pokemon.map((mon) => <PokemonCard key={mon.id} mon={mon} />)}
    </Card.Group>
  );
}

export default PokemonCollection;
