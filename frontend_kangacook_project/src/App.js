import React from "react";
import MainPage from "./pages/MainPage";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow flex items-center justify-center">
        <MainPage />
      </main>
      <Footer />
    </div>
  );
}

export default App;
