import React, { useState } from "react";
import "../styles/HeroSection.css";
import myPhoto from "../assets/your-photo.png"; // Your photo path

const HeroSection = ({ isNight }) => {
  const [showBio, setShowBio] = useState(false);

  const handleExploreClick = () => {
    setShowBio((prev) => !prev); // Toggle bio visibility
  };

  const handleCloseClick = () => {
    setShowBio(false); // Close bio card
  };

  return (
    <section className={`hero ${isNight ? "night" : "day"}`}>
      <div className="hero-content">
        <h1 className="fade-in-title">{isNight ? "Good Night" : "Hello & Welcome"}</h1>
        <p className="sub-text">
          {isNight
            ? "Enjoy a peaceful night under the twinkling stars."
            : "Embrace the beauty of a bright and cheerful day."}
        </p>
        <button className="hero-button" onClick={handleExploreClick}>
          {showBio ? "Ok that's enough" : "Explore More"}
        </button>
      </div>

      {/* Bio Card (conditionally rendered with animation) */}
      <div className={`bio-card ${showBio ? "visible" : "hidden"}`}>
        <button className="close-button" onClick={handleCloseClick}>
          &times;
        </button>
        <img src={myPhoto} alt="My Portrait" className="bio-photo" />
        <div className="bio-content">
          <h2>About Me</h2>
          <p>
          Hello! I am <strong>[Your Name]</strong>, a passionate developer who loves crafting elegant
    user interfaces and dynamic experiences. I specialize in front-end development, React.js, and
    creative design. This is an example text to test the dynamic height of the bio card. The card
    should grow as more text is added, ensuring all content is visible and well-wrapped inside the card
    without affecting the layout of the photo or the overall design.
    adssd
    asdasdasd
    asdasdasdasd
    asdasdasdasda
    distancedas
    designad
    asdasdasd
    asdasdasdasdasd


    asdasdasdasdasdasd
    aboutsd
    asd
    abouta
    aboutaa
    a
    slideras
    asdasdasdasdasdasdasdasda
    sliderasd
    asdasdasdasdasdasdasdasdaasd
    asdasdasdasdasdasdasdasdadas
    datasd
    addedas
    dataad
    asdasdasdasdasdasdasdasdadasasd
    addedasda
    dataasd
    asdasdasdasdasdasdasdasdadas

            </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
