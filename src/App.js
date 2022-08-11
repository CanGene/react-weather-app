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
            Candace Genesis
          </a>{" "}
          and is{" "}
          <a
            href="https://github.com/CanGene/react-weather-app"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced
          </a>{" "}
          on GitHub.
        </footer>
      </div>
    </div>
  );
}
