import { requestAllUser, requestAllTask, requestCreateTask } from "../api";

import { updateAllUser } from "../store/reducers/user";

// user
export const reqAllUser = () => async (dispatch) => {
  let response;
  try {
    response = await requestAllUser();
  } catch (err) {
    console.log(err);
  }
  console.log(response);
  if (response) {
    dispatch(updateAllUser(response));
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
  console.log(response);
  if (response) {
    dispatch(updateAllUser(response));
  }
};

export const reqCreateTask = () => async (dispatch) => {
  let response;
  try {
    response = await requestCreateTask();
  } catch (err) {
    console.log(err);
  }
  console.log(response);
  if (response) {
    dispatch(updateAllUser(response));
  }
};
