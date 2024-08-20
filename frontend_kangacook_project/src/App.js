import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MainPage from "./pages/MainPage";
import Layout from "./components/Layout";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<MainPage />} />
          </Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
