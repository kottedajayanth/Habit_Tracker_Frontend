import React, { useRef } from "react";
import UserList from "./components/UserList";
import HabitList from "./components/HabitList";
import AddHabit from "./components/AddHabit";

function App() {

  const habitListRef = useRef();

  const refreshHabits = () => {
    habitListRef.current && habitListRef.current();
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Habit Tracker Application</h1>

      <UserList />

      <hr />

      <AddHabit refresh={refreshHabits} />

      <HabitList ref={habitListRef} />
    </div>
  );
}

export default App;
