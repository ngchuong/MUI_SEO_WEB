import axios from "axios";

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
    .then((res) => res);
}

// TODO: make api update, delete task
export function requestEditTask() {
  return axios.patch("api", {}).then((res) => res);
}

export function requestDeleteTask() {
  return axios.delete("api", {}).then((res) => res);
}
