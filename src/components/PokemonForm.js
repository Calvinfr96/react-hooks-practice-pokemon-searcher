import React, { useState } from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({ addPokemon }) {
  const [formData, setFormData] = useState({
    name: "",
    hp: "",
    front: "",
    back: ""
  })

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    setFormData({
      ...formData,
      [name]: value
    })
  }

  function handleSubmit(event) {
    event.preventDefault()
    addPokemon(formData)
  }
  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input fluid label="Name" value={formData.name} onChange={handleChange} placeholder="Name" name="name" />
          <Form.Input fluid label="hp" value={formData.hp} onChange={handleChange} placeholder="hp" name="hp" />
          <Form.Input
            fluid
            label="Front Image URL"
            value={formData.front}
            onChange={handleChange}
            placeholder="url"
            name="front"
          />
          <Form.Input
            fluid
            label="Back Image URL"
            value={formData.back}
            onChange={handleChange}
            placeholder="url"
            name="back"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
