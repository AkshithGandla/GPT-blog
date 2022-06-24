import "./App.css";
import { Navbar } from "./components";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Header from "./containers/header/Header";
import About from "./containers/aboutRachita/About";
import AboutGPT from "./containers/aboutGPT/AboutGPT";
import Collab from "./containers/collab/Collab";
import FeaturedArticles from "./containers/FeaturedArticles/FeaturedArticles";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <About></About>
        <AboutGPT></AboutGPT>
        <Collab></Collab>
        <FeaturedArticles></FeaturedArticles>
      </div>
    </BrowserRouter>
  );
}

export default App;
