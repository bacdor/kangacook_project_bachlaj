import React, { useState } from "react";
import axios from "axios";

const AddAnimalForm = () => {
  const [name, setName] = useState("");
  const [color, setColor] = useState("");
  const [legsCount, setLegsCount] = useState("");
  const [description, setDescription] = useState("");
  //To provide a message
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);

  const handleSubmit = async (e) => {
    // e.preventDefault();
    const newAnimal = {
      name: name,
      color: color,
      legs_count: legsCount,
      description: description,
    };
    try {
      await axios.post("http://127.0.0.1:8000/app/", newAnimal);
      setSuccess("Ride offer created successfully!");
      setError(null);
    } catch (error) {
      setError("Failed to create ride offer");
      setSuccess(null);
    }
  };

  const formFields = [
    {
      label: "Name",
      type: "text",
      value: name,
      setter: setName,
    },
    {
      label: "Color",
      type: "text",
      value: color,
      setter: setColor,
    },
    {
      label: "Number of Legs",
      type: "number",
      value: legsCount,
      setter: setLegsCount,
    },
    {
      label: "Description",
      type: "textarea",
      value: description,
      setter: setDescription,
    },
  ];

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field, index) => (
        <label
          className="input input-bordered flex items-center gap-2 mb-1"
          key={index}
        >
          <input
            type={field.type}
            value={field.value}
            className="grow"
            placeholder={field.label}
            onChange={(e) => field.setter(e.target.value)}
            min={field.type === "number" ? 0 : undefined}
            required
          />
        </label>
      ))}
      {error && <div className="text-error">{error}</div>}
      {success && <div className="text-success">{success}</div>}
      <button className="btn btn-accent w-full" type="submit">
        Add an Animal
      </button>
    </form>
  );
};

export default AddAnimalForm;
