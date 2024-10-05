import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Weather from "./Weather";
function App() {
  return (
    <div className="App">
      <div className="container mb-1">
        <h1 className="text-center pt-5">Weather App</h1>
        <Weather />
        <footer className="text-center mt-1">
          <p>
            This project was coded by{" "}
            <a
              href="https://github.com/fafffff"
              target="_blank"
              rel="noreferrer"
            >
              Fasika Belayneh
            </a>{" "}
            and is
            <a
              href="https://github.com/fafffff/weather-app-react"
              target="_blank"
              rel="noreferrer"
            >
              Open-sourced
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
