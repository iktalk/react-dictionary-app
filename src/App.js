import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <h1>Dictionary App</h1>
          <Dictionary />
        </header>
      </div>
    </div>
  );
}
