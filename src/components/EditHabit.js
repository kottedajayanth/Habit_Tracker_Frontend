import React, { useState } from "react";
import HabitService from "../services/HabitService";

function EditHabit({ habit, onUpdated, onCancel }) {

  const [habitName, setHabitName] = useState(habit.habitName);
  const [description, setDescription] = useState(habit.description);

  const updateHabit = () => {

    const updatedHabit = {
      id: habit.id,
      habitName: habitName,
      description: description,
      userId: habit.userId
    };

    HabitService.updateHabit(habit.id, updatedHabit)
      .then(() => {
        onUpdated();
      })
      .catch(err => console.log(err));
  };

  return (
    <div>
      <h3>Edit Habit</h3>

      <input
        value={habitName}
        onChange={(e) => setHabitName(e.target.value)}
      />

      <input
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />

      <button onClick={updateHabit}>Update</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
}

export default EditHabit;
