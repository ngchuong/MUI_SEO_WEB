import { requestGetTask, requestPostKey } from "../api";

import { updateCurrenttask } from "../store/reducers/task";

export const reqGetTask = () => async (dispatch) => {
  let response;
  try {
    response = await requestGetTask();
  } catch (err) {
    console.log(err);
  }
  console.log(response);

  if (response) {
    dispatch(updateCurrenttask(response));
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
