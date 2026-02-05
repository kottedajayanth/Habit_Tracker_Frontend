import React, { useState } from "react";
import HabitList from "./components/HabitList";
import AddHabit from "./components/AddHabit";

function App() {

  const [refreshFlag, setRefreshFlag] = useState(false);

  const refreshHabits = () => {
    setRefreshFlag(!refreshFlag);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Advanced Habit Tracker</h1>

      <AddHabit onHabitAdded={refreshHabits} />

      <HabitList refresh={refreshFlag} onHabitDeleted={refreshHabits} />
    </div>
  );
}

export default App;
