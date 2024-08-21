import React from "react";
import AddAnimalForm from "../components/AddAnimalForm";
import AnimalList from "../components/AnimalList";

// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

function MainPage() {
  return (
    <div>
      <AddAnimalForm />
      <AnimalList />
    </div>
  );
}

export default MainPage;
