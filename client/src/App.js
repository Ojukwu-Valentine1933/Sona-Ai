import Layout from "./component/layout/Layout";
import "./App.css";

function App() {
  return (
    <>
      <Layout />
      <div className="App">
        <header className="App-header">
          <h1>Sona AI</h1>
          <button id="install-btn">Install App</button>
        </header>
      </div>
    </>
  );
}

export default App;
