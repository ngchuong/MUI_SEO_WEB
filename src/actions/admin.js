import get from "lodash/get";
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

export const reqCreateTask = (data, files) => async (dispatch, getState) => {
  // request file image;
  const listIdFile = [];
  try {
    for (let i = 0; i < files.length; i += 1) {
      const responseFile = await requestPostFile(files[i]);
      if (responseFile && /20[0-9]/.test(responseFile.status)) {
        listIdFile.push(get(responseFile, ["data", "fileId"], ""));
      }
    }
  } catch (err) {
    console.log(err);
    alert("Tạo task thất bại");
    return;
  }

  const {
    admin: { allTask },
  } = getState();

  // request task
  let response;
  const dataTask = { ...data, related_data: { ...data.related_data, image: listIdFile } };
  try {
    response = await requestCreateTask(dataTask);
  } catch (err) {
    console.log(err);
  }

  if (response && /20[0-9]/.test(response.status)) {
    const newAllTask = [...allTask, response.data];
    dispatch(updateAllTask(newAllTask));
  }
};

export const reqEditTask = (idTask, data) => async (dispatch, getState) => {
  const {
    admin: { allTask },
  } = getState();

  let response;
  try {
    response = await requestEditTask(idTask, data);
  } catch (err) {
    console.log(err);
  }
  if (response && /20[0-9]/.test(response.status)) {
    const newAllTask = allTask.map((el) => {
      if (el.id === idTask) {
        return response.data;
      }
      return el;
    });
    dispatch(updateAllTask(newAllTask));
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
