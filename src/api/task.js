import axios from "axios";

axios.defaults.withCredentials = true;

const host = "http://localhost:3000";
// const host = "http://192.168.30.105:3000";

// task
export function requestGetCurrentTask() {
  return axios.get(`${host}/api/task-user/current`).then((res) => res.data);
}

export function requestGetRandomTask() {
  return axios.get(`${host}/api/task-user/random`).then((res) => res.data);
}

export function requestReceiveTask() {
  return axios.post(`${host}/api/task-user/random`).then((res) => res.data);
}

export function requestPostKey(key) {
  return axios.post("google.com", { key }).then((res) => res.data);
}
