import React, { useState, useEffect } from "react";
import axios from "axios";

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/app/");
        setAnimals(response.data);
      } catch (error) {
        console.error("There was an error fetching the animals!", error);
      }
    };

    fetchAnimals();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/animals/${id}/`);
      setAnimals(animals.filter((animal) => animal.id !== id));
    } catch (error) {
      console.error("There was an error deleting the animal!", error);
    }
  };

  return (
    <div>
      <h2>Animal List</h2>
      <ul>
        {animals.map((animal) => (
          <li key={animal.id}>
            <strong>{animal.name}</strong>: {animal.description}
            <button onClick={() => handleDelete(animal.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AnimalList;
