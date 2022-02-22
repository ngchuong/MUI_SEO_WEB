import axios from "axios";

axios.defaults.withCredentials = true;

const host = "http://localhost:3000";
// const host = "http://192.168.30.105:3000";

// user
export function requestAllUser() {
  return axios.get(`${host}/api/users`).then((res) => res);
}

export function requestUpdateUser(userId, body) {
  return axios.patch(`${host}/api/users/${userId}`, { ...body }).then((res) => res);
}

export function requestDeleteUser(id) {
  return axios.delete(`${host}/api/users/${id}`).then((res) => res);
}

// task
export function requestAllTask() {
  return axios.get(`${host}/api/tasks`).then((res) => res);
}

export function requestCreateTask({ name, description, reward, relatedData, priority, image }) {
  return axios
    .post(`${host}/api/tasks`, {
      name,
      description,
      reward,
      related_data: relatedData,
      priority,
      image,
    })
    .then((res) => res.data);
}

export function requestEditTask(taskId, body) {
  return axios.patch(`${host}/api/tasks/${taskId}`, { ...body }).then((res) => res);
}

export function requestDeleteTask(id) {
  return axios.delete(`${host}/api/tasks/${id}`).then((res) => res);
}

// task file
export function requestGetFile(fileId) {
  return axios.get(`${host}/api/files/${fileId}`).then((res) => res);
}

export function requestPostFile(files) {
  return axios.post(`${host}/api/files`, {}).then((res) => res);
}

export function requestDeleteFile(fileId) {
  return axios.delete(`${host}/api/files/${fileId}`).then((res) => res);
}

// withdraw
export function requestAllWithdraw() {
  return axios.get(`${host}/api/withdraw`).then((res) => res);
}

export function requestAcceptWithdraw(id) {
  return axios.patch(`${host}/api/withdraw/${id}/accept`).then((res) => res);
}
