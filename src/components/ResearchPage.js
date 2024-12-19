import React, { useEffect, useState } from "react";
import "../styles/ResearchPage.css";

const ResearchPage = ({ isNight }) => {
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showScrollInstruction, setShowScrollInstruction] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollContainer = document.getElementById("scroll-container");
      const scrollTop = scrollContainer.scrollTop;
      const scrollHeight = scrollContainer.scrollHeight - scrollContainer.clientHeight;

      // Update scroll progress
      const progress = (scrollTop / scrollHeight) * 100;
      setScrollProgress(progress);

      // Hide the scroll instruction when scrolling starts
      if (scrollTop > 10) {
        setShowScrollInstruction(false);
      } else {
        setShowScrollInstruction(true);
      }
    };

    const scrollContainer = document.getElementById("scroll-container");
    scrollContainer.addEventListener("scroll", handleScroll);

    return () => scrollContainer.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className={`research ${isNight ? "night" : "day"}`}>
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="scroll-progress" style={{ width: `${scrollProgress}%` }}></div>
      </div>

      {/* Scrollable Container */}
      <div className="scroll-container" id="scroll-container">
        {/* First Panel */}
        <div className="spacer">
          <div className="panel">
            <h1 className={isNight ? "night-text" : "day-text"}>My Research Interests</h1>
            <p>
              I am passionate about exploring areas such as Artificial Intelligence,
              Machine Learning, and Natural Language Processing.
            </p>
          </div>
        </div>

        {/* Second Panel */}
        <div className="spacer">
          <div className="panel">
            <h2 className={isNight ? "night-text" : "day-text"}>Recent Publications</h2>
            <ul className="research-list"> 
              <li><strong>"Title 1"</strong> - Conference/Journal, Year</li>
              <li><strong>"Title 2"</strong> - Conference/Journal, Year</li>
              <li><strong>"Title 3"</strong> - Conference/Journal, Year</li>
            </ul>
          </div>
        </div>

        {/* Third Panel */}
        <div className="spacer">
          <div className="panel">
            <h2 className={isNight ? "night-text" : "day-text"}>Upcoming Projects</h2>
            <p>
              I am currently working on AI-driven big data systems and reinforcement learning for robotics applications.
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Instruction */}
      {showScrollInstruction && (
        <div className="scroll-instruction">
          <span>Scroll Down</span>
          <div className="arrow-down"></div>
        </div>
      )}
    </section>
  );
};

export default ResearchPage;
