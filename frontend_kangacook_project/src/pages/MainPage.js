import React from "react";
import AddAnimalForm from "../components/AddAnimalForm";
import AnimalList from "../components/AnimalList";

function MainPage() {
  return (
    <div className="flex flex-col md:flex-row w-full">
      <div className="flex-grow md:w-1/2 w-full justify-center items-center md:m-4">
        <AddAnimalForm />
      </div>
      <div className="flex-grow md:w-1/2 w-full justify-center items-center md:m-4">
        <AnimalList />
      </div>
    </div>
  );
}

export default MainPage;
