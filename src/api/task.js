import axios from "axios";
import { host } from "configs.js";

axios.defaults.withCredentials = true;

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

export function requestDestroyTask(id) {
  return axios.delete(`${host}/api/task-user/${id}`).then((res) => res);
}
