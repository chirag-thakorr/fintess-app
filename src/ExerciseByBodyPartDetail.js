import React from "react";
import { Link } from "react-router-dom";
import "./ExerciseByBodyPartDetail.css";

function ExerciseByBodyPartDetail() {
  return (
    <div className="exercise-by-body-part-detail">
      <div className="body-part-list">
        <div className="body-part">
          <h3>Chest and Triceps</h3>
          <p>Explore exercises that target the chest and triceps muscles.</p>
          {/* Link to the Chest and Triceps exercises page */}
          <Link to="/chest-and-triceps">
            <button>Start Exercises</button>
          </Link>
        </div>

        <div className="body-part">
          <h3>Back and Biceps</h3>
          <p>Explore exercises that target the back and biceps muscles.</p>
          <Link to="/back-and-biceps">
            <button>Start Exercises</button>
          </Link>
        </div>

        <div className="body-part">
          <h3>Legs and Shoulders</h3>
          <p>Explore exercises that target the legs and shoulders muscles.</p>
          <Link to="/legs-and-shoulders">
            <button>Start Exercises</button>
          </Link>
        </div>

        <div className="body-part">
          <h3>Abs and Core</h3>
          <p>Explore exercises that target the abs and core muscles.</p>
          <Link to="/abs-and-core">
            <button>Start Exercises</button>
          </Link>
        </div>
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default ExerciseByBodyPartDetail;
