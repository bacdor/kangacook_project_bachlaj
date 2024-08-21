import React from "react";
import AddAnimalForm from "../components/AddAnimalForm";
import AnimalList from "../components/AnimalList";

// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

function MainPage() {
  return (
    <div class="flex w-full">
      <div class="flex-grow w-1/2 place-items-center">
        <AddAnimalForm />
      </div>
      <div class="flex-grow w-1/2 place-items-center">
        <AnimalList />
      </div>
    </div>
  );
}

export default MainPage;
