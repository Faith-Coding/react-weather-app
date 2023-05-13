import React from "react";
import Weather from "./Weather";
import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Berlin" />
        <footer>
          This project was coded by Akhigbe Faith and is {""}
          <a
            href="https://github.com/Faith-Coding/react-weather-app"
            target="_blank"
            rel="noopener noreferrer"
          >
            Open Sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}
