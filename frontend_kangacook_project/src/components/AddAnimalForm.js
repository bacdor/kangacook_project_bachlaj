import React, { useState } from "react";
import axios from "axios";

const AddAnimalForm = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [legsCount, setLegsCount] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const newAnimal = { name, description };
    try {
      await axios.post("http://127.0.0.1:8000/app/add/", newAnimal);
      alert("Animal added successfully!");
    } catch (error) {
      console.error("There was an error adding the animal!", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Animal Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Animal Name"
        value={color}
        onChange={(e) => setColor(e.target.value)}
      />
      <input
        type="text"
        placeholder="Animal Name"
        value={legsCount}
        onChange={(e) => setLegsCount(e.target.value)}
      />
      <textarea
        placeholder="Animal Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button type="submit">Add Animal</button>
    </form>
  );
};

export default AddAnimalForm;
