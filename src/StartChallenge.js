import React from "react";
import { Link } from "react-router-dom";
import "./StartChallenge.css";

function StartChallenge() {
  return (
    <div className="start-challenge">
      <h3>Start the Challenge</h3>
      <p>Join the challenge and track your progress!</p>
      <Link to="/challenge-levels">
        <button>Start Now</button>
      </Link>
    </div>
  );
}

export default StartChallenge;
