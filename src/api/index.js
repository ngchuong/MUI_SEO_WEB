import axios from "axios";

axios.defaults.withCredentials = true;

const host = "http://localhost:3000";
// const host = "http://192.168.30.105:3000";

// task
export function requestGetTask() {
  return axios.get(`${host}/api/task-user/random`).then((res) => res.data);
}

export function requestPostKey(key) {
  return axios.post("google.com", { key }).then((res) => res.data);
}

// authentication
export function requestSignIn(email, password) {
  return axios.post(`${host}/api/sessions`, { email, password }).then((res) => res);
}
export function requestSignUp(name, telephone, address, email, password) {
  return axios
    .post(`${host}/api/users`, { name, telephone, address, email, password })
    .then((res) => res);
}

export function requesVerify() {
  return axios.post(`${host}/verify`).then((res) => res);
}

export function requestLogout() {
  return axios.delete(`${host}/api/sessions`).then((res) => res);
}
