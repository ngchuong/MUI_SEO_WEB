import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

// import { InputImg } from "components/InputImage";
// import { InputImage } from "components/InputImage/test";

export default function FormDialog({ handleClose, open, onSubmit, userInfo }) {
  const rulePhoneNumber = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const ruleSocialId = /^[0-9]*$/;
  const ruleBankNumber = /^[0-9]*$/;

  // add validate for form
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
  ValidatorForm.addValidationRule("isBankNumber", (value) => {
    if (value && ruleBankNumber.test(value)) {
      return true;
    }
    return false;
  });

  const relatedData = userInfo.related_data ? JSON.parse(userInfo.related_data) : {};
  const defaultInput = {
    name: userInfo.name,
    telephone: userInfo.telephone || "",
    address: userInfo.address || "",
    user_social_id: userInfo.user_social_id || "",
    bank_number: relatedData.bank_number || "",
    bank_name: relatedData.bank_name || "",
  };
  const [inputVal, setInputVal] = useState(defaultInput);
  const [inputImg, setInputImg] = useState("");

  // change input
  const onChangeImg = (e) => {
    setInputImg(e.target.files[0]);
  };
  const onChangeInput = (key) => (e) => {
    setInputVal({ ...inputVal, [key]: e.target.value });
  };

  // validate
  const checkRule = (rule, data) => {
    if (data && !rule.test(data)) return false;
    return true;
  };
  const validateData = (data) => {
    const checkRequire = Object.keys(data).map((key) => {
      if (!data[key]) return false;
      return true;
    });
    if (checkRequire.some((el) => el === false)) return false;

    // check own rules
    if (!checkRule(rulePhoneNumber, data.phone)) return false;
    if (!checkRule(ruleSocialId, data.user_social_id)) return false;
    if (!checkRule(ruleBankNumber, data.bank_number)) return false;

    return true;
  };
  // do create task
  const updateUserInfo = () => {
    if (validateData(inputVal)) {
      const { name, telephone, address, user_social_id, bank_number, bank_name } = inputVal;
      const data = {
        name,
        telephone,
        address,
        user_social_id,
        related_data: {
          bank_number,
          bank_name,
        },
      };

      onSubmit(data, inputImg);
      // handleClose();
    }
  };

  // display image user_social_id
  const DisplayImg = () => {
    const img = document.getElementById("imgId");
    if (img) {
      const file = img.files[0];
      const src = file ? URL.createObjectURL(file) : "";
      return (
        <div style={{ margin: 5 }}>
          <img width={150} height={100} src={src} alt="" />
        </div>
      );
    }

    return null;
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
                label="Họ tên*"
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
                label="Số điện thoại*"
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
                label="Số chứng minh nhân dân*"
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
                label="Địa chỉ*"
                onChange={onChangeInput("address")}
                name="address"
                value={inputVal.address}
                validators={["required"]}
                errorMessages={["Không được để trống"]}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <TextValidator
                label="Số tài khoản ngân hàng*"
                onChange={onChangeInput("bank_number")}
                name="bank_number"
                value={inputVal.bank_number}
                validators={["required", "isBankNumber"]}
                errorMessages={[
                  "Không được để trống",
                  "Số tài khoản ngân hàng không đúng định dạng",
                ]}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <TextValidator
                label="Tên ngân hàng, chi nhánh*"
                onChange={onChangeInput("bank_name")}
                name="bank_name"
                value={inputVal.bank_name}
                validators={["required"]}
                errorMessages={["Không được để trống"]}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2} style={{ display: "flex", flexDirection: "column" }}>
              Nhập ảnh chứng minh dân nhân
              <input type="file" onChange={onChangeImg} id="imgId" />
              <DisplayImg />
            </MDBox>
          </DialogContent>
          <DialogActions>
            <MDButton variant="gradient" color="primary" onClick={handleClose}>
              Quay về
            </MDButton>
            <MDButton type="submit" variant="gradient" color="info">
              Cập nhật
            </MDButton>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}
