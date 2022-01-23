import axios from "axios";

export function requestAllUser() {
  return axios.get("http://localhost:3000/api/users").then((res) => res);
}

export function requestAllTask() {
  return axios.get("http://localhost:3000/api/tasks").then((res) => res);
}

export function requestCreateTask(info) {
  return axios.post("google.com", { ...info }).then((res) => res.data);
}
