import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

import { InputImg } from "components/InputImage";

export default function FormDialog({ handleClose, open, onSubmit, userInfo }) {
  const rulePhoneNumber = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const ruleSocialId = /^[0-9]*$/;

  ValidatorForm.addValidationRule("isPhone", (value) => {
    if (rulePhoneNumber.test(value)) {
      return true;
    }
    return false;
  });
  ValidatorForm.addValidationRule("isSocialId", (value) => {
    if (ruleSocialId.test(value)) {
      return true;
    }
    return false;
  });

  const defaultInput = {
    name: userInfo.name,
    telephone: userInfo.telephone,
    address: userInfo.address,
    user_social_id: userInfo.user_social_id,
  };
  const [inputVal, setInputVal] = useState(defaultInput);
  const [inputImg, setInputImg] = useState({});

  // change input
  const onChangeImg = (e) => {
    setInputImg(e);
  };
  const onChangeInput = (key) => (e) => {
    setInputVal({ ...inputVal, [key]: e.target.value });
  };

  // do create task
  const updateUserInfo = () => {
    const { name, telephone, address, user_social_id } = inputVal;
    const data = {
      name,
      telephone,
      address,
      user_social_id,
      related_data: {
        image: inputImg.base64,
      },
    };

    onSubmit(data);
    // handleClose();
  };

  // display img
  const DisplayImg = () => {
    if (!inputImg.base64) {
      return null;
    }
    return (
      <div>
        <img width={100} height={100} src={inputImg.base64} alt="#" />
      </div>
    );
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <ValidatorForm onSubmit={updateUserInfo}>
          <DialogTitle>Chỉnh sửa thông tin cá nhân</DialogTitle>
          <DialogContent style={{ display: "flex", flexDirection: "column" }}>
            <MDBox mt={1} mb={2}>
              <TextValidator label="Email" value={userInfo.email} fullWidth disabled={true} />
            </MDBox>
            <MDBox mb={2}>
              <TextValidator
                label="Họ tên"
                onChange={onChangeInput("name")}
                name="name"
                value={inputVal.name}
                validators={["required"]}
                errorMessages={["Không được để trống"]}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <TextValidator
                label="Số điện thoại"
                onChange={onChangeInput("telephone")}
                name="telephone"
                value={inputVal.telephone}
                validators={["required", "isPhone"]}
                errorMessages={["Không được để trống", "Số điện thoại không hợp lệ"]}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <TextValidator
                label="Số chứng minh nhân dân"
                onChange={onChangeInput("user_social_id")}
                name="user_social_id"
                value={inputVal.user_social_id}
                validators={["required", "isSocialId"]}
                errorMessages={["Không được để trống", "Số chứng minh nhân dân không đúng"]}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <TextValidator
                label="Địa chỉ"
                onChange={onChangeInput("address")}
                name="address"
                value={inputVal.address}
                validators={["required"]}
                errorMessages={["Không được để trống"]}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <InputImg onDone={onChangeImg} />
              <DisplayImg />
            </MDBox>
          </DialogContent>
          <DialogActions>
            <MDButton variant="gradient" color="primary" onClick={updateUserInfo}>
              Quay về
            </MDButton>
            <MDButton type="submit" variant="gradient" color="info" onClick={updateUserInfo}>
              Cập nhật
            </MDButton>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}
