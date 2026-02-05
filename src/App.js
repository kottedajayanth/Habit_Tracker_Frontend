import React, { useState } from "react";
import HabitList from "./components/HabitList";
import AddHabit from "./components/AddHabit";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {

  const [refreshFlag, setRefreshFlag] = useState(false);

  const refreshHabits = () => {
    setRefreshFlag(!refreshFlag);
  };

  return (
    <div style={{ padding: "20px" }}>
      <h1>Advanced Habit Tracker</h1>

      <AddHabit onHabitAdded={refreshHabits} />

      <HabitList refresh={refreshFlag} onChange={refreshHabits} />

      <ToastContainer />
    </div>
  );
}

export default App;
