import React, { useEffect, useState } from "react";
import "../styles/Navbar.css";
import sunIcon from "../assets/sun-icon.png"; // Sun icon
import moonIcon from "../assets/moon-icon.png"; // Moon icon
import { FaRegSun, FaRegMoon } from "react-icons/fa"; // Import Sun and Moon icons
import { Link } from "react-router-dom";
import cloudIcon from "../assets/cloud-icon.png"; // Cloud icon for day mode
import starIcon from "../assets/star-icon.png"; // Star icon for night mode
// import cloud1 from "../assets/cloud1.png";
// import cloud2 from "../assets/cloud2.png";
// import cloud3 from "../assets/cloud3.png";

// const cloudIcons = [cloud1, cloud2, cloud3];

// const newClouds = Array.from({ length: 5 }, () => ({
//   id: Math.random(),
//   top: Math.floor(Math.random() * 40) + 5,
//   left: Math.floor(Math.random() * 90),
//   opacity: Math.random() > 0.5 ? 0.5 : 1,
//   icon: cloudIcons[Math.floor(Math.random() * cloudIcons.length)], // Random icon
// }));

{/* <img
  key={cloud.id}
  src={cloud.icon}
  alt="Cloud Icon"
  className="cloud"
  style={{
    top: `${cloud.top}vh`,
    left: `${cloud.left}vw`,
    opacity: cloud.opacity,
  }}
/> */}
const Navbar = ({ isNight,onToggle }) => {
    const [elements, setElements] = useState([]);

    // Function to generate a new star at random coordinates

   // Generate random positions for clouds
useEffect(() => {

if (isNight) {
    setElements([])
    const interval = setInterval(() => {
      setElements((prevElements) => {
        const newElement = {
            id: Math.random(), // Unique ID
            top: Math.floor(Math.random() * 30) + 5, // Random Y position (`5%-35% of viewport height)
            left: Math.floor(Math.random() * 80) + 5, // Random X position (5%-85% of viewport width)
            size: Math.floor(Math.random() * 20) + 50, // Random size between 50px and 70px
            speed: Math.random() * 1 + 2, // Random animation speed (0s - 10s)
            delay: Math.random()

        };
        return [...prevElements, newElement];
      });

      // Remove the oldest element after ~30s (10 twinkle cycles at 3s each)
      setTimeout(() => {
        setElements((prevElements) => prevElements.slice(1));
      }, 9000);
    }, 1000); // Generate every 3 seconds

    return () => clearInterval(interval); // Cleanup
  }

  else { //If daytime      
    setElements([])

    const generateClouds = () => {
      const newElements = [];
      const minDistance = 20; // Minimum distance between clouds in pixels

      const isTooClose = (element, existingElements) => {
        return existingElements.some((oldElement) => {
          const dx = Math.abs(oldElement.left - element.left);
          const dy = Math.abs(oldElement.top - element.top);
          return Math.sqrt(dx * dx + dy * dy) < minDistance; // Pythagorean distance formula
        });
      };
      const interval = setInterval(() => {
        const element = {
            id: Math.random(), // Unique ID
            top: Math.floor(Math.random() * 30) + 5, // Random Y position (`5%-35% of viewport height)
            left: Math.floor(Math.random() * 90), // Random X position (0%-90% of viewport width)
            size: Math.floor(Math.random() * 20) + 50, // Random size between 50px and 70px
            speed: Math.random() * 5 + 30, // Random animation speed (0s - 10s)
            delay: Math.random() * 5             
            
        }
        if ((!isTooClose(element, newElements))) {
        setElements((prevElements) => {
          return [...prevElements, element];
        })};

        // Remove the oldest element after ~30s (10 twinkle cycles at 3s each)
        setTimeout(() => {
          setElements((prevElements) => prevElements.slice(1));
        }, 30000);
      }, 5000); // Generate every 3 seconds

      return () => clearInterval(interval)}; // Cleanup

    generateClouds();
    return;

  }
}, [isNight]);

  return (
    <nav className="navbar">
    {/* Toggle Switch Button */}
    <label className="switch">
        <input type="checkbox" checked={isNight} onChange={onToggle} />
        <span className="slider round">
          <span className="icon sun-icon">
            <FaRegSun />
          </span>
          <span className="icon moon-icon">
            <FaRegMoon />
          </span>
        </span>
      </label>
      <div className="nav-links">
        <Link to="/">HOME</Link>
        <Link to="/research">RESEARCH</Link>
      </div>
      <div className="icon-container">
        <img
          src={isNight ? moonIcon : sunIcon} // Dynamically switch icon
          alt={isNight ? "Moon Icon" : "Sun Icon"}
          className={isNight ? "moon-logo" : "sun-logo"} // Separate classes for styling
        />
      </div>
    
      <div className="nav-links">
        <a href="#about">ABOUT</a>
        <a href="#blogs">BLOGS</a>
        <a href="#contact">CONTACT</a>
        <a href="#faq">FAQ</a>
      </div>
      {elements.map((element) => (
        <img
          key={element.id}
          src={isNight ? starIcon : cloudIcon} // Use star for night, cloud for day
          alt={isNight ? "Star" : "Cloud"}
          className={isNight ? "star" : "cloud"} // Apply respective styling
          style={{
            top: `${element.top}vh`,
            left: `${element.left}vw`,
            width: `${element.size}px`,
            height: "auto",
            animationDuration: `${element.speed}s`,
            animationDelay: `${element.delay}`
          }}
        />
      ))}
    </nav>
  );
};

export default Navbar;
