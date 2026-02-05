import React, { useEffect, useState } from "react";
import HabitService from "../services/HabitService";

function HabitList() {
  const [habits, setHabits] = useState([]);
  const [error, setError] = useState("");

  useEffect(() => {
    loadHabits();
  }, []);

  const loadHabits = () => {
    HabitService.getHabits()
      .then((response) => {
        setHabits(response.data);
      })
      .catch((err) => {
        console.log(err);
        setError("Failed to load habits");
      });
  };

  const deleteHabit = (id) => {
    HabitService.deleteHabit(id)
      .then(() => {
        loadHabits();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h2>Habit List</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      {habits.length === 0 ? (
        <p>No habits found</p>
      ) : (
        <ul>
          {habits.map((habit) => (
            <li key={habit.id}>
              <b>{habit.habitName}</b> - {habit.description}
              <button
                style={{ marginLeft: "10px" }}
                onClick={() => deleteHabit(habit.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default HabitList;
