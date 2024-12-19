import React, { useState } from "react";
import HeroSection from "./components/HeroSection";
import ContactIcons from "./components/ContactIcons";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import ResearchPage from "./components/ResearchPage";
const App = () => {
  const [isNight, setIsNight] = useState(false);

  // Handle mode toggle
  const handleToggle = () => {
    setIsNight((prev) => !prev);
  };

  return (
    <Router>
      <Navbar isNight={isNight} onToggle={handleToggle} />
      <Routes>
        <Route path="/" element={<HeroSection isNight={isNight} />} />
        <Route path="/research" element={<ResearchPage isNight={isNight} />} />
      </Routes>
      <ContactIcons isNight={isNight}/>
    </Router>
  );
};

export default App;
