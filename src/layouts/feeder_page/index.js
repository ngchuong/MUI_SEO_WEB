import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import Icon from "@mui/material/Icon";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import "./index.css";

// white","primary","secondary","info","success","warning","error","light","dark
function FeederPage() {
  const navigate = useNavigate();
  const [time, setTime] = useState(60);
  const [isUnlock, setIsUnlock] = useState(false);
  const currentTask = useSelector((state) => state.task.currentTask);

  const countdownTimer = () => {
    // setTimeout(() => {});
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (time === 0) {
        setIsUnlock(true);
        return () => clearInterval(interval);
      }
      setTime(time - 1);
    }, 1000);
    return () => clearInterval(interval);
  }, [time]);

  const handleClick = () => {
    setTime(0);
    const link = currentTask && currentTask.related_data && currentTask.related_data.origin;
    window.open(link);
  };

  const DisplayTime = () => {
    if (time === 0) {
      return <div className="timer">Time up!</div>;
    }
    return <div className="timer">{time}&nbsp;seconds</div>;
  };

  return (
    <div>
      {/* <DashboardNavbar /> */}
      <MDBox
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <MDBox>Background</MDBox>
        <MDBox>
          <MDTypography
            component="span"
            variant="header"
            fontSize="30px"
            textTransform="uppercase"
            color="dark"
            fontWeight="bold"
            opacity={0.8}
            sx={{ lineHeight: 0 }}
          >
            Sub or like page to unlock
          </MDTypography>
        </MDBox>
        <MDBox
          py={3}
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            width: "100%",
            borderTop: "1px solid #c1c1c1",
            borderBottom: "1px solid #c1c1c1",
          }}
        >
          <MDBox mt={4.5}>
            <DisplayTime />
          </MDBox>
          <MDBox mt={4.5}>
            <MDButton
              style={{ padding: "13px 75px" }}
              size="large"
              color="info"
              onClick={handleClick}
            >
              <Icon fontSize="small">facebook</Icon>&nbsp;LIKE
            </MDButton>
          </MDBox>
          <MDBox my={4.5}>
            <MDButton
              style={{ padding: "13px 75px" }}
              onClick={() => navigate("/authentication/sign-up")}
              size="large"
              color="primary"
            >
              <Icon fontSize="small">{isUnlock ? "lock_open" : "lock"}</Icon>&nbsp;
              {isUnlock ? "Unlocked" : "Locked"}
            </MDButton>
          </MDBox>
        </MDBox>
        <MDBox>Footer</MDBox>
      </MDBox>
    </div>
  );
}

export default FeederPage;
