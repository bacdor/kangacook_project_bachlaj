import React from "react";
import AddAnimalForm from "../components/AddAnimalForm";
import AnimalList from "../components/AnimalList";

// import { Link } from "react-router-dom";
// import { useState, useEffect } from "react";

function MainPage() {
  return (
    <div className="flex w-full">
      <div className="flex-grow w-1/2 justify-center items-center m-4">
        <AddAnimalForm />
      </div>
      <div className="flex-grow w-1/2 flex flex-col justify-center items-center m-4">
        <AnimalList />
      </div>
    </div>
  );
}

export default MainPage;
