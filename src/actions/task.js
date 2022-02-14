import {
  requestGetCurrentTask,
  requestGetRandomTask,
  requestReceiveTask,
  requestPostKey,
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

  if (response && response.status === 200) {
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
  console.log("random task", response);

  if (response && response.status === 200) {
    dispatch(updateRandomTask(response.data));
  }
};

export const reqPostTask = (keyVal) => async () => {
  let response;
  try {
    response = await requestPostKey(keyVal);
  } catch (err) {
    console.log(err);
  }

  console.log(response);
};
