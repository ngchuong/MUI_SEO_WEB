import {
  requestGetCurrentTask,
  requestGetRandomTask,
  requestFinishTask,
  requestDestroyTask,
} from "../api/task";

import { updateRandomTask, updateCurrentTask } from "../store/reducers/task";

export const reqGetCurrentTask = () => async (dispatch) => {
  let response;
  try {
    response = await requestGetCurrentTask();
  } catch (err) {
    console.log(err);
  }

  if (response && /20[0-9]/.test(response.status)) {
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

  if (response && /20[0-9]/.test(response.status)) {
    dispatch(updateRandomTask(response.data));
  }
};

export const reqPostTask = (taskId, keyVal) => async (dispatch) => {
  let response;
  try {
    response = await requestFinishTask(taskId, keyVal);
  } catch (err) {
    console.log(err);
  }

  if (response && /20[0-9]/.test(response.status)) {
    dispatch(updateCurrentTask({}));
  }
};

export const destroyTask = (id) => async (dispatch) => {
  let response;
  try {
    response = await requestDestroyTask(id);
  } catch (err) {
    console.log(err);
  }

  if (response && /20[0-9]/.test(response.status)) {
    dispatch(updateCurrentTask({}));
  }
};
