import axios from "axios";

export function requestAllUser() {
  return axios.get("google.com").then((res) => res.data);
}

export function requestAllTask() {
  return axios.get("google.com").then((res) => res.data);
}

export function requestCreateTask(info) {
  return axios.post("google.com", { ...info }).then((res) => res.data);
}
