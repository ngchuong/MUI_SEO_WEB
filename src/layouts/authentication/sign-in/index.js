import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

// @mui material components
import Card from "@mui/material/Card";

import { ValidatorForm, TextValidator } from "react-material-ui-form-validator";

import BasicLayout from "layouts/authentication/components/BasicLayout";
import bgImage from "assets/images/bg-sign-in-basic.jpeg";
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";
import MDButton from "../../../components/MDButton";

// Authentication action
import { reqSignIn } from "../../../actions/authentication";

function SignInForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [inputVal, setInputVal] = useState({ email: "", pwd: "" });
  const isSignIn = useSelector((state) => state.user.isSignIn);
  useEffect(() => {
    if (isSignIn) {
      navigate("/task");
    }
  }, [isSignIn]);

  const onChangeInput = (key) => (e) => {
    setInputVal({ ...inputVal, [key]: e.target.value });
  };

  const validateData = (data) => {
    if (!data.email || !data.pwd) {
      return false;
    }
    if (data.email && !/$|.+@.+..+/.test(data.email)) {
      return false;
    }

    return true;
  };

  const doSignIn = () => {
    if (validateData(inputVal)) {
      console.log("req login", inputVal);
      dispatch(reqSignIn(inputVal));
    } else {
      console.log("khong du dieu kien");
    }
  };

  return (
    <BasicLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="info"
          mx={2}
          mt={-3}
          p={2}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Đăng nhập
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <ValidatorForm onSubmit={doSignIn}>
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
              <MDButton type="submit" variant="gradient" color="info" fullWidth>
                Đăng nhập
              </MDButton>
            </MDBox>
            <MDBox mt={3} mb={1} textAlign="center">
              <MDTypography variant="button" color="text">
                Bạn chưa có tài khoản{" "}
                <MDTypography
                  component={Link}
                  to="/authentication/sign-up"
                  variant="button"
                  color="info"
                  fontWeight="medium"
                  textGradient
                >
                  Đăng ký
                </MDTypography>
              </MDTypography>
            </MDBox>
          </ValidatorForm>
        </MDBox>
      </Card>
    </BasicLayout>
  );
}

export default SignInForm;
