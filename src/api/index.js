import axios from "axios";

// task
export function requestGetTask() {
  return axios.get("google.com").then((res) => res.data);
}

export function requestPostKey(key) {
  return axios.post("google.com", { key }).then((res) => res.data);
}

// authentication
export function requestSignIn(email, pwd) {
  return axios.post("google.com", { email, pwd }).then((res) => res.data);
}
export function requestSignUp(name, email, pwd) {
  return axios.post("google.com", { name, email, pwd }).then((res) => res.data);
}
