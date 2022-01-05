import "./App.css";
import "antd/dist/antd.css";
//import "~antd/lib/style/themes/default.less";
import CustomRouter from "./Router/CustomRouter";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <CustomRouter />
      </header>
    </div>
  );
}

export default App;
