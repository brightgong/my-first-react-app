import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Current Time: {new Date().toLocaleTimeString()}</h1>
        </div>
      </header>
    </div>
  );
}

export default App;
