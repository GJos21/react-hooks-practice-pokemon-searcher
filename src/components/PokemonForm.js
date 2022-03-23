import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ onNewPokemon }) {
  const [formData, setFormData] = useState({
    name: "", hp: "", sprites: { front: "", back: "" }
  })

  function handleSubmit(e) {
    e.preventDefault();
    fetch(`http://localhost:3001/pokemon`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then((item) => onNewPokemon(item));
  }

  function handleChange(e) {
    const value = e.target.value;
    let name = e.target.name;

    if (name.includes("Url")) {
      name = name.slice(0, name.length - 3);
      const sprites = { ...formData.sprites, [name]: value }
      setFormData({ ...formData, ["sprites"]: sprites });
    }
    else {
      setFormData({ ...formData, [name]: value });
    }

  }

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={(e) => {
          handleSubmit(e);
        }}
      >
        <Form.Group widths="equal">
          <Form.Input
            fluid
            label="Name"
            placeholder="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="hp"
            placeholder="hp"
            name="hp"
            value={formData.hp}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
            value={formData.sprites.front}
            onChange={handleChange}
          />
          <Form.Input
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
            value={formData.sprites.back}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
