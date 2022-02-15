import axios from "axios";

axios.defaults.withCredentials = true;

const host = "http://localhost:3000";
// const host = "http://192.168.30.105:3000";

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
