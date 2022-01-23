import { requestAllUser, requestAllTask, requestCreateTask } from "../api/apiAdmin";

import { updateAllUser, updateAllTask } from "../store/reducers/admin";

// user
export const reqAllUser = () => async (dispatch) => {
  let response;
  try {
    response = await requestAllUser();
  } catch (err) {
    console.log(err);
  }
  if (response && response.status.startsWith("20")) {
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
  if (response && response.status.startsWith("20")) {
    dispatch(updateAllTask(response.data));
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
