import Weather from "./Screen/Weather";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Screen/Home";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Weather/:name" element={<Weather />} />
        </Routes>
      </header>
    </div>
  );
}

export default App;
