import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

// @mui material components
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import BasicLayout from "layouts/authentication/components/BasicLayout";
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";
import MDButton from "../../../components/MDButton";

import { reqSignUp } from "../../../actions/authentication";

function SignUpForm() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [inputVal, setInputVal] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    pwd: "",
  });

  const rulePhoneNumber = /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
  const ruleEmail = /$|.+@.+..+/;

  ValidatorForm.addValidationRule("isPhone", (value) => {
    if (rulePhoneNumber.test(value)) {
      return true;
    }
    return false;
  });

  const onChangeInput = (key) => (e) => {
    setInputVal({ ...inputVal, [key]: e.target.value });
  };

  const validateData = (data) => {
    const checkRequire = Object.keys(data).map((key) => {
      if (!data[key]) return false;
      return true;
    });

    if (checkRequire.every((el) => el === false)) return false;

    if (data.email && !ruleEmail.test(data.email)) {
      return false;
    }
    if (data.phone && !rulePhoneNumber.test(data.phone)) {
      return false;
    }

    return true;
  };

  const doSignUp = () => {
    if (validateData(inputVal)) {
      dispatch(reqSignUp(inputVal));
    } else {
      console.log("khong duoc dang ki");
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
            Đăng ký
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <ValidatorForm onSubmit={doSignUp}>
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
                label="Email"
                onChange={onChangeInput("email")}
                name="email"
                value={inputVal.email}
                validators={["required", "isEmail"]}
                errorMessages={["Không được để trống", "Email không đúng định dạng"]}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <TextValidator
                label="Số điện thoại"
                onChange={onChangeInput("phone")}
                name="phone"
                validators={["required", "isPhone"]}
                errorMessages={["Không được để trống", "Sai định dạng số điện thoại"]}
                value={inputVal.phone}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <TextValidator
                label="Địa chỉ"
                onChange={onChangeInput("address")}
                name="address"
                validators={["required"]}
                errorMessages={["Không được để trống"]}
                value={inputVal.address}
                fullWidth
              />
            </MDBox>
            <MDBox mb={2}>
              <TextValidator
                label="Mật khẩu"
                onChange={onChangeInput("pwd")}
                name="password"
                type="password"
                validators={["required"]}
                errorMessages={["Không được để trống"]}
                value={inputVal.pwd}
                fullWidth
              />
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton type="submit" variant="gradient" color="info" fullWidth onClick={doSignUp}>
                Đăng ký
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Bạn đã có tài khoản{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-in"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Đăng nhập
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
