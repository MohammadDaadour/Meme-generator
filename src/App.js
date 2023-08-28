import "./App.css";
import Home from "./components/Home";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import MemePage from "./components/MemePage";
import MemeGenerate from "./components/MemeGenerate";
import AboutPage from "./components/AboutPage";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/templates/:id" element={<MemePage />} />
          <Route path="/generate/:id" element={<MemeGenerate />} />
          <Route path="/about" element ={<AboutPage/>}/>
        </Routes>
        <Footer/>

      </BrowserRouter>
    </div>
  );
}

export default App;
