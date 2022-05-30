import React from "react";
import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="container">
      <div className="App">
        <header className="App-header">
          <h1 className="mb-5">
            {" "}
            <a href="./index.html">
              Dictionary{" "}
              <span role="img" aria-label="book emoji">
                📖
              </span>
            </a>
          </h1>
        </header>
        <Dictionary />
        <footer className="mt-5">
          This application was coded by Ishmeet Kaur and is Open-Source on{" "}
          <a href="https://github.com/iktalk/react-dictionary-app.git">
            Github
          </a>
        </footer>
      </div>
    </div>
  );
}
