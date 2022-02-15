import axios from "axios";

axios.defaults.withCredentials = true;

const host = "http://localhost:3000";
// const host = "http://192.168.30.105:3000";

// task
export function requestGetCurrentTask() {
  return axios.get(`${host}/api/task-user/current`).then((res) => res);
}

export function requestGetRandomTask() {
  return axios.get(`${host}/api/task-user/random`).then((res) => res);
}

export function requestReceiveTask(id) {
  return axios.post(`${host}/api/task-user`, { task_id: id }).then((res) => res);
}

export function requestFinishTask(key) {
  return axios.post(`${host}/api/task-user/finish`, { task_id: key }).then((res) => res);
}
