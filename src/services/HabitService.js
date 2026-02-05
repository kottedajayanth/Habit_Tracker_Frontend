import axios from "axios";

const API_URL = "http://localhost:9090/api/habits";

class HabitService {

  getHabits() {
    return axios.get(API_URL);
  }

  createHabit(habit) {
    return axios.post(API_URL, habit);
  }

  updateHabit(id, habit) {
    return axios.put(`${API_URL}/${id}`, habit);
  }

  deleteHabit(id) {
    return axios.delete(`${API_URL}/${id}`);
  }
}

export default new HabitService();
