import axios from "axios";
import { host } from "configs.js";

axios.defaults.withCredentials = true;

// task
export function requestGetCurrentTask() {
  return axios.get(`${host}/task-user/current`).then((res) => res);
}

export function requestGetRandomTask() {
  return axios.get(`${host}/task-user/random`).then((res) => res);
}

export function requestReceiveTask(id) {
  return axios.post(`${host}/task-user`, { task_id: id }).then((res) => res);
}

export function requestFinishTask(taskId, key) {
  return axios.post(`${host}/task-user/finish`, { task_id: taskId, key }).then((res) => res);
}

export function requestDestroyTask(id) {
  return axios.delete(`${host}/task-user/${id}`).then((res) => res);
}
