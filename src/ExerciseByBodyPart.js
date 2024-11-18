import React from "react";
import { Link } from "react-router-dom";
import "./ExerciseByBodyPart.css";

function ExerciseByBodyPart() {
  return (
    <div className="exercise-by-body-part">
      <h3>Exercise by Body Part</h3>
      <p>Select a body part and find the best exercises for it!</p>
      {/* Link to the new page for body part exercises */}
      <Link to="/exercise-by-body-part">
        <button>View Exercises</button>
      </Link>
    </div>
  );
}

export default ExerciseByBodyPart;
