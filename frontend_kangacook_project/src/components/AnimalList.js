import React, { useState, useEffect } from "react";
import axios from "axios";

const AnimalList = () => {
  const [animals, setAnimals] = useState([]);
  //To provide a message
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  useEffect(() => {
    const fetchAnimals = async () => {
      try {
        const response = await axios.get("http://127.0.0.1:8000/app/");
        setAnimals(response.data);
      } catch (error) {
        setError("There was an error fetching the animals!", error);
        setSuccess(null);
      }
    };

    fetchAnimals();
  }, []);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://127.0.0.1:8000/app/${id}/`);
      setAnimals(animals.filter((animal) => animal.id !== id));
      setSuccess("The animal deleted successfully!");
      setError(null);
    } catch (error) {
      setError("Failed to delete the animal");
      setSuccess(null);
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">
        Animal List
      </h2>
      <div class="overflow-x-auto">
        <table class="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>Color</th>
              <th>Legs</th>
              <th>Description</th>
            </tr>
          </thead>
          <tbody>
            {animals.map((item, index) => (
              <tr key={item.id} className={index % 2 === 0 ? "" : "hover"}>
                <td>{item.name}</td>
                <td>{item.color}</td>
                <td>{item.legs_counts}</td>
                <td>{item.description}</td>
                <td>
                  <button onClick={() => handleDelete(item.id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
          {error && <div className="text-error">{error}</div>}
          {success && <div className="text-success">{success}</div>}
        </table>
      </div>
    </div>
  );
};

export default AnimalList;
