import React, { useState } from "react";
import "./BeginnerWorkout.css";

const BeginnerWorkout = () => {
  const days = [
    {
      day: 1,
      exercises: [
        { id: 1, name: "High Knees", sets: 4, reps: "25 reps", duration: 45 },
        { id: 2, name: "Pushups", sets: 4, reps: "10 reps", duration: 45 },
        { id: 3, name: "Plank", sets: 4, reps: "30 sec", duration: 30 },
        { id: 4, name: "Dumbbell Press", sets: 4, reps: "10 reps", duration: 45 },
        { id: 5, name: "Lat Pulldown", sets: 4, reps: "10 reps", duration: 45 },
        { id: 6, name: "Squats", sets: 4, reps: "15 reps", duration: 45 },
      ],
    },
    // Add more days as needed
  ];

  const [currentDay, setCurrentDay] = useState(1); // Start with Day 1
  const [currentExercise, setCurrentExercise] = useState(0); // Start with the first exercise
  const [currentSet, setCurrentSet] = useState(
    days[0].exercises[0]?.sets || 0
  ); // Initialize sets for the first exercise
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [timer, setTimer] = useState(0);

  // Ensure currentDay exists in the array
  const dayData = days.find((day) => day.day === currentDay);
  const currentExerciseDetails = dayData?.exercises[currentExercise];
  const nextExerciseDetails =
    currentExerciseDetails && dayData?.exercises[currentExercise + 1];

  const startExercise = () => {
    if (!currentExerciseDetails) return;
    setTimer(currentExerciseDetails.duration);
    setIsTimerRunning(true);

    const countdown = setInterval(() => {
      setTimer((prev) => {
        if (prev <= 1) {
          clearInterval(countdown);
          setIsTimerRunning(false);
          completeSet();
        }
        return prev - 1;
      });
    }, 1000);
  };

  const skipExercise = () => {
    setIsTimerRunning(false);
    completeSet();
  };

  const completeSet = () => {
    if (currentSet > 1) {
      setCurrentSet((prevSet) => prevSet - 1);
    } else {
      nextExercise();
    }
  };

  const nextExercise = () => {
    if (dayData && currentExercise < dayData.exercises.length - 1) {
      setCurrentExercise((prev) => prev + 1);
      setCurrentSet(dayData.exercises[currentExercise + 1]?.sets || 0);
    } else if (dayData && currentDay < days.length) {
      alert(`Day ${currentDay} Completed! Moving to Day ${currentDay + 1}`);
      setCurrentDay((prev) => prev + 1);
      setCurrentExercise(0);
      setCurrentSet(days[currentDay]?.exercises[0]?.sets || 0);
    } else {
      alert("Congratulations! You've completed all workouts!");
    }
  };

  return (
    <div className="beginner-workout">
      {dayData ? (
        <>
          <h2>Beginner Challenge - Day {currentDay}</h2>
          <div className="workout-section">
            {currentExerciseDetails ? (
              <>
                <h3>{currentExerciseDetails.name}</h3>
                <p>Reps: {currentExerciseDetails.reps}</p>
                <p>Sets Left: {currentSet}</p>
                <p>
                  {isTimerRunning
                    ? `Time Left: ${timer}s`
                    : "Press start to begin this exercise."}
                </p>
                {!isTimerRunning && (
                  <button onClick={startExercise}>
                    {currentSet > 0 ? "Start Set" : "Next Exercise"}
                  </button>
                )}
                {isTimerRunning && (
                  <div className="timer-controls">
                    <button disabled>Running...</button>
                    <button onClick={skipExercise}>Skip</button>
                  </div>
                )}
              </>
            ) : (
              <p>All exercises completed for the day!</p>
            )}
          </div>

          {nextExerciseDetails && (
            <div className="next-workout">
              <h4>Up Next: {nextExerciseDetails.name}</h4>
              <p>Reps: {nextExerciseDetails.reps}</p>
              <p>Sets: {nextExerciseDetails.sets}</p>
            </div>
          )}
        </>
      ) : (
        <p>No workout data available for the selected day.</p>
      )}
    </div>
  );
};

export default BeginnerWorkout;
