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

  // do update user
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

      onSubmit(userInfo.id, data, inputImg);
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
          <DialogTitle>Ch???nh s???a th??ng tin c?? nh??n</DialogTitle>
          <DialogContent style={{ display: "flex", flexDirection: "column" }}>
            <MDBox mt={1} mb={2}>
              <TextValidator label="Email" value={userInfo.email} fullWidth disabled={true} />
            </MDBox>
            <MDBox mb={2}>
              <TextValidator
                label="H??? t??n*"
                onChange={onChangeInput("name")}
                name="name"
                value={inputVal.name}
                validators={["required"]}
                errorMessages={["Kh??ng ???????c ????? tr???ng"]}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <TextValidator
                label="S??? ??i???n tho???i*"
                onChange={onChangeInput("telephone")}
                name="telephone"
                value={inputVal.telephone}
                validators={["required", "isPhone"]}
                errorMessages={["Kh??ng ???????c ????? tr???ng", "S??? ??i???n tho???i kh??ng h???p l???"]}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <TextValidator
                label="S??? ch???ng minh nh??n d??n*"
                onChange={onChangeInput("user_social_id")}
                name="user_social_id"
                value={inputVal.user_social_id}
                validators={["required", "isSocialId"]}
                errorMessages={["Kh??ng ???????c ????? tr???ng", "S??? ch???ng minh nh??n d??n kh??ng ????ng"]}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <TextValidator
                label="?????a ch???*"
                onChange={onChangeInput("address")}
                name="address"
                value={inputVal.address}
                validators={["required"]}
                errorMessages={["Kh??ng ???????c ????? tr???ng"]}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <TextValidator
                label="S??? t??i kho???n ng??n h??ng*"
                onChange={onChangeInput("bank_number")}
                name="bank_number"
                value={inputVal.bank_number}
                validators={["required", "isBankNumber"]}
                errorMessages={[
                  "Kh??ng ???????c ????? tr???ng",
                  "S??? t??i kho???n ng??n h??ng kh??ng ????ng ?????nh d???ng",
                ]}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <TextValidator
                label="T??n ng??n h??ng, chi nh??nh*"
                onChange={onChangeInput("bank_name")}
                name="bank_name"
                value={inputVal.bank_name}
                validators={["required"]}
                errorMessages={["Kh??ng ???????c ????? tr???ng"]}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2} style={{ display: "flex", flexDirection: "column" }}>
              Nh???p ???nh ch???ng minh d??n nh??n
              <input type="file" onChange={onChangeImg} id="imgId" />
              <DisplayImg />
            </MDBox>
          </DialogContent>
          <DialogActions>
            <MDButton variant="gradient" color="primary" onClick={handleClose}>
              Quay v???
            </MDButton>
            <MDButton type="submit" variant="gradient" color="info">
              C???p nh???t
            </MDButton>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}
