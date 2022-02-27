import get from "lodash/get";
import { requestUpdateUser, requestPostFile } from "api/apiAdmin";

import { updateUserInfo } from "../store/reducers/user";

export const reqUpdateUser = (userId, body, file) => async (dispatch) => {
  let responseFile;
  if (file) {
    try {
      responseFile = await requestPostFile(file);
    } catch (err) {
      console.log(err);
      alert("Cập nhật thông tin thất bại");
      return;
    }
  }

  const fileId =
    responseFile && /20[0-9]/.test(responseFile.status)
      ? get(responseFile, ["data", "fileId"])
      : null;

  const dataBody = { ...body, related_data: { ...body.related_data, image: fileId || "" } };
  let response;
  try {
    response = await requestUpdateUser(userId, dataBody);
  } catch (err) {
    console.log(err);
  }

  if (response && /20[0-9]/.test(response.status)) {
    dispatch(updateUserInfo(response.data));
  }
};
