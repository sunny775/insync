import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import { Home, Meeting } from "./components/pages";

function App() {
  return (
    <div className="App">
      <Router>
        <header className="header">
          <div>inSync</div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path=":hash" element={<Meeting />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
