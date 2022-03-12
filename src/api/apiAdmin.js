import axios from "axios";
import { host } from "configs.js";

axios.defaults.withCredentials = true;

// user
export function requestAllUser() {
  return axios.get(`${host}/users`).then((res) => res);
}

export function requestUpdateUser(userId, body) {
  const { name, telephone, address, user_social_id, related_data } = body;

  return axios
    .post(`${host}/users/${userId}`, {
      name,
      telephone,
      address,
      user_social_id,
      related_data,
    })
    .then((res) => res);
}

export function requestDeleteUser(id) {
  return axios.delete(`${host}/users/${id}`).then((res) => res);
}

// task
export function requestAllTask() {
  return axios.get(`${host}/tasks`).then((res) => res);
}

export function requestCreateTask(data) {
  const {
    name,
    list_posts,
    unlock_link,
    description,
    reward,
    related_data,
    priority,
    max_turn,
    type_task,
  } = data;
  return axios
    .post(`${host}/tasks`, {
      name,
      list_posts,
      unlock_link,
      description,
      reward,
      related_data,
      max_turn,
      priority,
      type_task,
    })
    .then((res) => res);
}

export function requestEditTask(taskId, body) {
  return axios.post(`${host}/tasks/${taskId}`, { ...body }).then((res) => res);
}

export function requestDeleteTask(id) {
  return axios.delete(`${host}/tasks/${id}`).then((res) => res);
}

// task file
export function requestPostFile(files) {
  const body = new FormData();
  body.append("file", files);

  return axios({
    method: "post",
    url: `${host}/files`,
    data: body,
    headers: {
      "Content-Type": "multipart/form-data",
    },
  }).then((res) => res);
}

export function requestDeleteFile(fileId) {
  return axios.delete(`${host}/files/${fileId}`).then((res) => res);
}

// withdraw
export function requestAllWithdraw() {
  return axios.get(`${host}/withdraw`).then((res) => res);
}

export function requestAcceptWithdraw(id) {
  return axios.post(`${host}/withdraw/${id}/accept`).then((res) => res);
}

export function requestGetUserDetail(userId) {
  return axios.get(`${host}/users/${userId}`).then((res) => res);
}
