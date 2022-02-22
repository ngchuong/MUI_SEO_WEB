import {
  requestAllUser,
  requestAllTask,
  requestCreateTask,
  requestEditTask,
  requestDeleteTask,
  requestAllWithdraw,
  requestPostFile,
} from "../api/apiAdmin";

import { updateAllUser, updateAllTask, updateAllWithdrawal } from "../store/reducers/admin";

// user
export const reqAllUser = () => async (dispatch) => {
  let response;
  try {
    response = await requestAllUser();
  } catch (err) {
    console.log(err);
  }
  if (/20[0-9]/.test(response.status)) {
    dispatch(updateAllUser(response.data));
  }
};

// task
export const reqAllTask = () => async (dispatch) => {
  let response;
  try {
    response = await requestAllTask();
  } catch (err) {
    console.log(err);
  }

  if (response && /20[0-9]/.test(response.status)) {
    dispatch(updateAllTask(response.data));
  }
};

export const reqCreateTask = (data, files) => async (dispatch) => {
  let response;
  let responseFile;
  try {
    response = await requestCreateTask(data);
    responseFile = await requestPostFile(files);
  } catch (err) {
    console.log(err);
  }
  if (/20[0-9]/.test(response.status)) {
    dispatch(updateAllTask([response.data]));
  }
};

export const reqEditTask = (data) => async (dispatch) => {
  let response;
  try {
    response = await requestEditTask(data);
  } catch (err) {
    console.log(err);
  }
  if (/20[0-9]/.test(response.status)) {
    dispatch(updateAllTask([response.data]));
  }
};

export const reqDeleteTask = (id) => async (dispatch) => {
  let response;
  try {
    response = await requestDeleteTask(id);
  } catch (err) {
    console.log(err);
  }
  if (/20[0-9]/.test(response.status)) {
    dispatch(updateAllTask([response.data]));
  }
};

// withdraw
export const reqAllWithdrawal = () => async (dispatch) => {
  let response;
  try {
    response = await requestAllWithdraw();
  } catch (err) {
    console.log(err);
  }
  if (/20[0-9]/.test(response.status)) {
    dispatch(updateAllWithdrawal(response.data));
  }
};
