import axios from "axios";

export function requestGetTask() {
  return axios.get("google.com").then((res) => res.data);
}

export function requestPostKey(key) {
  return axios.post("google.com", { key }).then((res) => res.data);
}
