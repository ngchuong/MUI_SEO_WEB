import axios from "axios";

axios.defaults.withCredentials = true;

export function requestAllUser() {
  return axios.get("http://localhost:3000/api/users").then((res) => res);
}

export function requestAllTask() {
  return axios.get("http://localhost:3000/api/tasks").then((res) => res);
}

export function requestCreateTask({ name, description, reward, relatedData, priority, image }) {
  return axios
    .post("http://localhost:3000/api/tasks", {
      name,
      description,
      reward,
      related_data: relatedData,
      priority,
      image,
    })
    .then((res) => res.data);
}

// TODO: make api update, delete task
export function requestEditTask() {
  return axios.patch("api", {}).then((res) => res.data);
}

export function requestDeleteTask(id) {
  return axios.delete(`http://localhost:3000/api/task-user/${id}`).then((res) => res.data);
}
