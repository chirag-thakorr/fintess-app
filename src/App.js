import React from "react";
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";
import "./App.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faDumbbell, faUser } from "@fortawesome/free-solid-svg-icons";
import Exercises from "./Exercises";
import Profile from "./Profile";
import ExerciseByBodyPartDetail from "./ExerciseByBodyPartDetail"; // Importing the new component
import ChestAndTriceps from "./ChestAndTriceps";
import ChallengeLevels from "./ChallengeLevels";
import StartChallenge from "./StartChallenge";
import BeginnerWorkout from "./BeginnerWorkout";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/exercises" element={<Exercises />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/exercise-by-body-part" element={<ExerciseByBodyPartDetail />} /> 
          <Route path="/chest-and-triceps" element={<ChestAndTriceps />} />
          <Route path="/start-challenge" element={<StartChallenge />} />
          <Route path="/challenge-levels" element={<ChallengeLevels />} />
          <Route path="/challenges/beginner" element={<BeginnerWorkout />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

// Dynamic Header for Mobile
function Header() {
  const location = useLocation();

  return (
    <header className="App-header">
      <div className="header-title">
        <h1>{getHeaderTitle(location.pathname)}</h1>
      </div>
      <nav className="header-nav">
        <ul className="nav-list">
          <li className={location.pathname === "/" ? "active" : ""}>
            <Link to="/">Home</Link>
          </li>
          <li className={location.pathname === "/exercises" ? "active" : ""}>
            <Link to="/exercises">Exercises</Link>
          </li>
          <li className={location.pathname === "/profile" ? "active" : ""}>
            <Link to="/profile">Profile</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

// Get page title based on the route
function getHeaderTitle(path) {
  switch (path) {
    case "/":
      return "Home";
    case "/exercises":
      return "Exercises";
    case "/profile":
      return "Profile";
    default:
      return "App";
  }
}

// Footer Navigation for Mobile
function Footer() {
  return (
    <footer className="App-footer">
      <nav className="footer-nav">
        <ul className="nav-list">
          <li>
            <Link to="/">
              <FontAwesomeIcon icon={faHome} />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link to="/exercises">
              <FontAwesomeIcon icon={faDumbbell} />
              <span>Exercises</span>
            </Link>
          </li>
          <li>
            <Link to="/profile">
              <FontAwesomeIcon icon={faUser} />
              <span>Profile</span>
            </Link>
          </li>
        </ul>
      </nav>
    </footer>
  );
}

function Home() {
  return (
    <div>
      <p>Welcome to the Home page of the app!</p>
    </div>
  );
}

export default App;
