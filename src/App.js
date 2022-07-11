import "./App.css";
import { Navbar } from "./components";
import { BrowserRouter } from "react-router-dom";
import { HashLink as Link } from "react-router-hash-link";
import Header from "./containers/header/Header";
import About from "./containers/aboutRachita/About";
import AboutGPT from "./containers/aboutGPT/AboutGPT";
import Collab from "./containers/collab/Collab";
import FeaturedArticles from "./containers/FeaturedArticles/FeaturedArticles";
import PhotosSlick from "./components/PhotosSlick/PhotosSlick";
import Note from "./components/Note/Note";
import Blog from "./containers/Blog/Blog";
import News from "./containers/News/News";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Header></Header>
        <About></About>
        <AboutGPT></AboutGPT>
        <Blog></Blog>
        <Collab></Collab>
        <News></News>
        <FeaturedArticles></FeaturedArticles>
        <div className="photosNote">
          <PhotosSlick></PhotosSlick>
          <Note></Note>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
