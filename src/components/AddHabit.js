import React, { useState } from "react";
import HabitService from "../services/HabitService";
import { toast } from "react-toastify";

function AddHabit({ onHabitAdded }) {

  const [habitName, setHabitName] = useState("");
  const [description, setDescription] = useState("");

  const submitHabit = () => {

    if (!habitName || !description) {
      toast.error("Please fill all fields");
      return;
    }

    const habit = {
      habitName: habitName,
      description: description,
      userId: 1
    };

    HabitService.createHabit(habit)
      .then(() => {
        toast.success("Habit Added Successfully!");
        setHabitName("");
        setDescription("");
        onHabitAdded();
      })
      .catch(() => {
        toast.error("Failed to add habit");
      });
  };

  return (
    <div>
      <h2>Add Habit</h2>

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

      <button onClick={submitHabit}>Add Habit</button>
    </div>
  );
}

export default AddHabit;
