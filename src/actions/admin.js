import {
  requestAllUser,
  requestAllTask,
  requestCreateTask,
  requestEditTask,
  requestDeleteTask,
} from "../api/apiAdmin";

import { updateAllUser, updateAllTask } from "../store/reducers/admin";
// TODO: update dialog;

// user
export const reqAllUser = () => async (dispatch) => {
  let response;
  try {
    response = await requestAllUser();
  } catch (err) {
    console.log(err);
  }
  if (response && response.status === 200) {
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
  if (response && response.status === 200) {
    dispatch(updateAllTask(response.data));
  }
};

export const reqCreateTask = (data) => async (dispatch) => {
  let response;
  try {
    response = await requestCreateTask(data);
  } catch (err) {
    console.log(err);
  }
  if (response && response.status === 200) {
    dispatch(updateAllTask([response.data]));
  }
};

// TODO: make action edit, delete task
export const reqEditTask = (data) => async (dispatch) => {
  let response;
  try {
    response = await requestEditTask(data);
  } catch (err) {
    console.log(err);
  }
  if (response && response.status === 200) {
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
  if (response && response.status === 200) {
    dispatch(updateAllTask([response.data]));
  }
};
