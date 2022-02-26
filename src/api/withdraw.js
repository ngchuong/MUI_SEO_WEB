import axios from "axios";
import { host } from "configs.js";

axios.defaults.withCredentials = true;

// For User
// request withdraw
export function requestWithdraw(amount) {
  return axios
    .post(`${host}/api/withdraw`, {
      amount,
    })
    .then((res) => res);
}

// request cancel withdraw
export function requestCancelWithdraw(userId) {
  return axios.patch(`${host}/api/withdraw/${userId}/cancel`).then((res) => res);
}

// request get withdraw detail
export function requestWithdrawDetail(userId) {
  return axios.get(`${host}/api/withdraw/${userId}`).then((res) => res);
}

// request get all withdraw
export function requestAllWithdraw(userId) {
  return axios.get(`${host}/api/users/${userId}/withdraw`).then((res) => res);
}
