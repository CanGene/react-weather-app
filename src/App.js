import "./App.css";
import Weather from "./Weather.js";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <Weather defaultCity="Coimbatore" />
        <footer>
          This project was coded by{" "}
          <a
            href="https://candacegenesis.myportfolio.com"
            target="_blank"
            rel="noreferrer"
          >
            Candace Genesis.
          </a>{" "}
          It is{" "}
          <a
            href="https://github.com/CanGene/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
          on GitHub and{" "}
          <a
            href="https://62eb120081bda7147b52eedd--tranquil-souffle-969cea.netlify.app/?"
            target="_blank"
            rel="noreferrer"
          >
            hosted on Netlify.
          </a>
        </footer>
      </div>
    </div>
  );
}
