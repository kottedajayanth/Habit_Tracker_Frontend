import React, { useEffect, useState } from "react";
import HabitService from "../services/HabitService";
import EditHabit from "./EditHabit";
import { toast } from "react-toastify";

function HabitList({ refresh, onChange }) {

  const [habits, setHabits] = useState([]);
  const [editingHabit, setEditingHabit] = useState(null);

  useEffect(() => {
    loadHabits();
  }, [refresh]);

  const loadHabits = () => {
    HabitService.getHabits()
      .then((response) => {
        setHabits(response.data);
      })
      .catch(err => console.log(err));
  };

  const deleteHabit = (id) => {
    HabitService.deleteHabit(id)
  .then(() => {
    toast.success("Habit Deleted!");
    loadHabits();
  })
  .catch(() => toast.error("Delete Failed"));

  };

  return (
    <div>
      <h2>Habit List</h2>

      {habits.length === 0 ? (
        <p>No habits found</p>
      ) : (
        <ul>
          {habits.map((habit) => (
            <li key={habit.id}>
              <b>{habit.habitName}</b> - {habit.description}

              <button onClick={() => setEditingHabit(habit)}>
                Edit
              </button>

              <button onClick={() => deleteHabit(habit.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}

      {editingHabit && (
        <EditHabit
          habit={editingHabit}
          onUpdated={() => {
            setEditingHabit(null);
            loadHabits();
          }}
          onCancel={() => setEditingHabit(null)}
        />
      )}
    </div>
  );
}

export default HabitList;
