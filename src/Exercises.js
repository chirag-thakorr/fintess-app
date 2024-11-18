import React from "react";
import StartChallenge from "./StartChallenge";
import ExerciseByWeek from "./ExerciseByWeek";
import ExerciseByBodyPart from "./ExerciseByBodyPart";
import "./Exercises.css";

function Exercises() {
  return (
    <div className="exercises-container">

      <div className="exercises-grid">
        <StartChallenge />
        <ExerciseByWeek />
        <ExerciseByBodyPart />
        
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default Exercises;
