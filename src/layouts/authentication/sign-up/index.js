import React, { useState } from "react";
import { Link } from "react-router-dom";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import { useModal } from "components/Modal";
import { SimpleDialog } from "components/Modal/dialog";
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";
import MDButton from "../../../components/MDButton";

import { requestSignUp } from "../../../api";

function SignUpForm() {
  const { setModal, unSetModal } = useModal();

  const defaultInput = {
    name: "",
    email: "",
    telephone: "",
    address: "",
    user_social_id: "",
    bank_number: "",
    bank_name: "",
    pwd: "",
  };
  const [inputVal, setInputVal] = useState(defaultInput);

  const ruleEmail = /$|.+@.+..+/;
  const rulePhoneNumber = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const ruleSocialId = /^[0-9]*$/;
  const ruleBankNumber = /^[0-9]*$/;

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

  const onChangeInput = (key) => (e) => {
    const value = e.target.value;
    setInputVal({ ...inputVal, [key]: value });
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
    if (!checkRule(ruleEmail, data.email)) return false;
    if (!checkRule(rulePhoneNumber, data.telephone)) return false;
    if (!checkRule(ruleSocialId, data.user_social_id)) return false;
    if (!checkRule(ruleBankNumber, data.bank_number)) return false;

    return true;
  };

  const doSignUp = async () => {
    if (validateData(inputVal)) {
      const { name, email, telephone, address, user_social_id, bank_number, bank_name, pwd } =
        inputVal;
      const related_data = {
        bank_number: bank_number.trim(),
        bank_name: bank_name.trim(),
      };

      // request
      let resSignUp;
      try {
        resSignUp = await requestSignUp(
          name.trim(),
          telephone.trim(),
          address.trim(),
          email.trim(),
          pwd.trim(),
          user_social_id.trim(),
          related_data
        );
      } catch (err) {
        setModal(<SimpleDialog content={<div>????ng k?? t??i kho???n th???t b???i!</div>} />);
      }

      if (resSignUp && /20[0-9]/.test(resSignUp.status)) {
        setModal(<SimpleDialog content={<div>????ng k?? t??i kho???n th??nh c??ng!</div>} />);
        setInputVal(defaultInput);
      } else {
        setModal(<SimpleDialog content={<div>????ng k?? t??i kho???n th???t b???i!</div>} />);
      }
    }
  };
  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            ????ng k??
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <ValidatorForm onSubmit={doSignUp}>
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
                label="Email*"
                onChange={onChangeInput("email")}
                name="email"
                value={inputVal.email}
                validators={["required", "isEmail"]}
                errorMessages={["Kh??ng ???????c ????? tr???ng", "Email kh??ng ????ng ?????nh d???ng"]}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <TextValidator
                label="S??? ??i???n tho???i*"
                onChange={onChangeInput("telephone")}
                name="telephone"
                validators={["required", "isPhone"]}
                errorMessages={["Kh??ng ???????c ????? tr???ng", "Sai ?????nh d???ng s??? ??i???n tho???i"]}
                value={inputVal.telephone}
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
                label="T??n ng??n h??ng, chi nh??nh"
                onChange={onChangeInput("bank_name")}
                name="bank_name"
                value={inputVal.bank_name}
                validators={["required"]}
                errorMessages={["Kh??ng ???????c ????? tr???ng"]}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <TextValidator
                label="M???t kh???u*"
                onChange={onChangeInput("pwd")}
                name="password"
                type="password"
                validators={["required"]}
                errorMessages={["Kh??ng ???????c ????? tr???ng"]}
                value={inputVal.pwd}
                fullWidth
              />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                ????ng k??
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                B???n ???? c?? t??i kho???n{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  ????ng nh???p
                </MDTypography>
              </MDTypography>
            </MDBox>
          </ValidatorForm>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default SignUpForm;
