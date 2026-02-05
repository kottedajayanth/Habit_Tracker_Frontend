import React, { useState } from "react";
import HabitService from "../services/HabitService";

function AddHabit({ refresh }) {

  const [habitName, setHabitName] = useState("");
  const [description, setDescription] = useState("");

  const addHabit = () => {
    const habit = {
      habitName,
      description,
      userId: 1
    };

    HabitService.createHabit(habit)
      .then(() => {
        setHabitName("");
        setDescription("");
        refresh();
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <h3>Add Habit</h3>

      <input
        placeholder="Habit Name"
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />

      <input
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={addHabit}>Add Habit</button>
    </div>
  );
}

export default AddHabit;
