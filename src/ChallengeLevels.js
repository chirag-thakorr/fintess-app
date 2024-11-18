import React from "react";
import { Link } from "react-router-dom";
import "./ChallengeLevels.css";

function ChallengeLevels() {
  return (
    <div className="challenge-levels-page">
      {/* <h2>Select Your Challenge Level</h2> */}
      <div className="levels-grid">
        <div className="level">
          <h3>Beginner</h3>
          <p>Start your fitness journey with basic exercises.</p>
          <Link to="/challenges/beginner">
            <button>Select Beginner</button>
          </Link>
        </div>
        <div className="level">
          <h3>Intermediate</h3>
          <p>Take it to the next level with moderate exercises.</p>
          <Link to="/challenges/intermediate">
            <button>Select Intermediate</button>
          </Link>
        </div>
        <div className="level">
          <h3>Advanced</h3>
          <p>Challenge yourself with advanced exercises.</p>
          <Link to="/challenges/advanced">
            <button>Select Advanced</button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default ChallengeLevels;
