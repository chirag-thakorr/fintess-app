import React from "react";
import "./ChestAndTriceps.css";
import chest1 from './images/chest-and-triceps/Barbell-Bench-Press.jpg'

// Dummy data for chest and triceps exercises
const exercises = [
  {
    id: 1,
    image: chest1, // Replace with actual image URL
    name: "Push-Up",
    setsAndTiming: "3 sets of 15 reps",
    targetArea: "Chest and Triceps",
  },
  {
    id: 2,
    image: chest1, // Replace with actual image URL
    name: "Push-Up",
    setsAndTiming: "3 sets of 15 reps",
    targetArea: "Chest and Triceps",
  },
  {
    id: 3,
    image: chest1, // Replace with actual image URL
    name: "Push-Up",
    setsAndTiming: "3 sets of 15 reps",
    targetArea: "Chest and Triceps",
  },
  {
    id: 4,
    image: chest1, // Replace with actual image URL
    name: "Push-Up",
    setsAndTiming: "3 sets of 15 reps",
    targetArea: "Chest and Triceps",
  },
  {
    id: 5,
    image: chest1, // Replace with actual image URL
    name: "Push-Up",
    setsAndTiming: "3 sets of 15 reps",
    targetArea: "Chest and Triceps",
  },
  // Add more exercises as needed
];

function ChestAndTriceps() {
  return (
    <div className="exercise-list">
      <h3>Chest and Triceps Exercises</h3>
      <div className="exercise-grid">
        {exercises.map((exercise) => (
          <div key={exercise.id} className="exercise-box">
            <img src={exercise.image} alt={exercise.name} />
            <h3>{exercise.name}</h3>
            <p>{exercise.setsAndTiming}</p>
            <p><strong>Target Area:</strong> {exercise.targetArea}</p>
          </div>
        ))}
      </div>
      <br/>
      <br/>
      <br/>
    </div>
  );
}

export default ChestAndTriceps;
