import "./App.css";
import { Navbar } from "./components";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Header from "./containers/header/Header";
import About from "./containers/aboutRachita/About";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <About></About>
      </div>
    </BrowserRouter>
  );
}

export default App;
