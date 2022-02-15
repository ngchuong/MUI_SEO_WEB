import {
  requestGetCurrentTask,
  requestGetRandomTask,
  requestReceiveTask,
  requestFinishTask,
} from "../api/task";

import { updateRandomTask, updateCurrentTask } from "../store/reducers/task";

export const reqGetCurrentTask = () => async (dispatch) => {
  let response;
  try {
    response = await requestGetCurrentTask();
  } catch (err) {
    console.log(err);
  }
  console.log("current task", response);

  if (/20[0-9]/.test(response.status)) {
    dispatch(updateCurrentTask(response.data));
  }
};

export const reqGetRandomTask = () => async (dispatch) => {
  let response;
  try {
    response = await requestGetRandomTask();
  } catch (err) {
    console.log(err);
  }

  if (/20[0-9]/.test(response.status)) {
    dispatch(updateRandomTask(response.data));
  }
};

export const reqPostTask = (keyVal) => async () => {
  let response;
  try {
    response = await requestFinishTask(keyVal);
  } catch (err) {
    console.log(err);
  }

  console.log(response);
};
