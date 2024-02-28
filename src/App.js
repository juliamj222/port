import "./App.css";
import { Route, Routes, Link, BrowserRouter as Router } from "react-router-dom";
import MainIndex from "./components/main-section/MainIndex";
import Footer from "./components/footer/Footer";
import React from "react";
import HeaderAndNav from "./components/header-and-nav/Header.jsx";
import Hobbies from "./components/hobbies-and-interests/Hobbies.jsx";
import EducationWork from "./components/education-work/EducationWork.jsx";
import MoreAboutMe from "./components/more-about-me/MoreAboutMe.jsx";
import Projects from "./components/projects/Projects.jsx";
import RentCraft from "./components/projects/RentCraft/RentCraft.jsx";
import Jeopardy from "./components/projects/Jeopardy/Jeopardy.jsx";
import CommentedBlog from "./components/projects/CommentedBlog/CommentedBlog.jsx";
import EscapeBH from "./components/projects/EscapeBH/EscapeBH.jsx";
import HarmonyHotel from "./components/projects/HarmonyHotel/HarmonyHotel.jsx";
import MathGames from "./components/projects/MathGames/MathGames.jsx";
import Pokedex from "./components/projects/Pokedex/Pokedex.jsx";

function App() {
  return (
    <div className="App">
      <HeaderAndNav />
      <Routes>
        <Route path="/" element={<MainIndex />} />
        <Route path="/port" element={<MainIndex />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/education-work" element={<EducationWork />} />
        <Route path="/hobbies" element={<Hobbies />} />
        <Route path="/more-about-me" element={<MoreAboutMe />} />
        <Route path="/projects/rentcraft" element={<RentCraft />} />
        <Route path="/projects/jeopardy" element={<Jeopardy />} />
        <Route path="/projects/commented-blog" element={<CommentedBlog />} />
        <Route path="/projects/escape-bh" element={<EscapeBH />} />
        <Route path="/projects/harmony-hotel" element={<HarmonyHotel />} />
        <Route path="/projects/math-games" element={<MathGames />} />
        <Route path="/projects/pokedex" element={<Pokedex />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
