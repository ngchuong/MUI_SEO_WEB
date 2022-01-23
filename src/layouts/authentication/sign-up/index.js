import React, { useState } from "react";
// react-router-dom components
import { Link } from "react-router-dom";

import { useDispatch } from "react-redux";

// @mui material components
import Card from "@mui/material/Card";
import Checkbox from "@mui/material/Checkbox";

// Material Dashboard 2 React components
import CoverLayout from "layouts/authentication/components/CoverLayout";
import bgImage from "assets/images/bg-sign-up-cover.jpeg";
import MDBox from "../../../components/MDBox";
import MDTypography from "../../../components/MDTypography";
import MDInput from "../../../components/MDInput";
import MDButton from "../../../components/MDButton";

import { reqSignUp } from "../../../actions/authentication";

function Cover() {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const [inputVal, setInputVal] = useState({
    name: "",
    phone: "",
    address: "",
    email: "",
    pwd: "",
  });
  const onChangeInput = (key) => (e) => {
    setInputVal({ ...inputVal, [key]: e.target.value });
  };

  const doSignUp = () => {
    dispatch(reqSignUp(inputVal));
  };
  return (
    <CoverLayout image={bgImage}>
      <Card>
        <MDBox
          variant="gradient"
          bgColor="info"
          borderRadius="lg"
          coloredShadow="success"
          mx={2}
          mt={-3}
          p={3}
          mb={1}
          textAlign="center"
        >
          <MDTypography variant="h4" fontWeight="medium" color="white" mt={1}>
            Đăng ký
          </MDTypography>
        </MDBox>
        <MDBox pt={4} pb={3} px={3}>
          <MDBox component="form" role="form">
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Họ tên"
                variant="standard"
                fullWidth
                value={inputVal.name}
                onChange={onChangeInput("name")}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="email"
                label="Email"
                variant="standard"
                fullWidth
                value={inputVal.email}
                onChange={onChangeInput("email")}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="number"
                label="Số điện thoại"
                variant="standard"
                fullWidth
                value={inputVal.phone}
                onChange={onChangeInput("phone")}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="text"
                label="Địa chỉ"
                variant="standard"
                fullWidth
                value={inputVal.address}
                onChange={onChangeInput("address")}
              />
            </MDBox>
            <MDBox mb={2}>
              <MDInput
                type="password"
                label="Mật khẩu"
                variant="standard"
                fullWidth
                value={inputVal.pwd}
                onChange={onChangeInput("pwd")}
              />
            </MDBox>
            <MDBox display="flex" alignItems="center" ml={-1}>
              <Checkbox />
              <MDTypography
                variant="button"
                fontWeight="regular"
                color="text"
                sx={{ cursor: "pointer", userSelect: "none", ml: -1 }}
              >
                &nbsp;&nbsp;I agree the&nbsp;
              </MDTypography>
              <MDTypography
                component="a"
                href="#"
                variant="button"
                fontWeight="bold"
                color="info"
                textGradient
              >
                Terms and Conditions
              </MDTypography>
            </MDBox>
            <MDBox mt={4} mb={1}>
              <MDButton variant="gradient" color="info" fullWidth onClick={doSignUp}>
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
          </MDBox>
        </MDBox>
      </Card>
    </CoverLayout>
  );
}

export default Cover;
