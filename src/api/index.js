import axios from "axios";

// task
export function requestGetTask() {
  return axios.get("google.com").then((res) => res.data);
}

export function requestPostKey(key) {
  return axios.post("google.com", { key }).then((res) => res.data);
}

// authentication
export function requestSignIn(email, password) {
  return axios.post("http://localhost:3000/verify", { email, password }).then((res) => res);
}
export function requestSignUp(name, telephone, address, email, password) {
  return axios
    .post("http://localhost:3000/api/users", { name, telephone, address, email, password })
    .then((res) => res);
}
