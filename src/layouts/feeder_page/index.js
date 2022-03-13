import React, { useState, useEffect } from "react";
import get from "lodash/get";
import { useSelector, useDispatch } from "react-redux";
// import { useNavigate } from "react-router-dom";

import Icon from "@mui/material/Icon";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import { isMobile } from "utils";
import "./index.css";

// white","primary","secondary","info","success","warning","error","light","dark
function FeederPage() {
  const dispatch = useDispatch();
  const [time, setTime] = useState(120);
  const [isUnlock, setIsUnlock] = useState(false);
  const [checkReq, setCheckReq] = useState(false);
  const currentTask = useSelector((state) => state.task.currentTask);
  const relatedData = get(currentTask, "related_data")
    ? JSON.parse(get(currentTask, "related_data"))
    : {};

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
    setTimeout(() => {
      setTime(0);
      setCheckReq(false);
    }, 60000);

    const link = relatedData.origin;
    window.open(link);
    setCheckReq(true);
  };

  const openLinkGetKey = () => {
    window.open(currentTask.unlock_link);
  };

  const DisplayTime = () => {
    if (time === 0) {
      return <div className="timer">Time up!</div>;
    }
    return <div className="timer">{time}&nbsp;seconds</div>;
  };

  return (
    <div>
      <MDBox
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        {/* <MDBox>Background</MDBox> */}
        <MDBox mt={2}>
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
          <MDBox mt={2}>
            {checkReq ? (
              <MDTypography
                component="span"
                variant="header"
                fontSize="12px"
                // color="info"
                fontStyle="italic"
                fontWeight="bold"
                opacity={0.8}
                sx={{ lineHeight: 0 }}
              >
                Hệ thống đang kiểm tra
              </MDTypography>
            ) : (
              ""
            )}
          </MDBox>
          <MDBox mt={3}>
            <MDButton
              width={200}
              style={{ width: "250px" }}
              size="large"
              color="info"
              onClick={handleClick}
            >
              <Icon fontSize="small">facebook</Icon>&nbsp;LIKE
            </MDButton>
          </MDBox>
          <MDBox my={4.5}>
            <MDButton
              style={{ width: "250px" }}
              onClick={openLinkGetKey}
              size="large"
              color="primary"
              disabled={!isUnlock}
            >
              <Icon fontSize="small">{isUnlock ? "lock_open" : "lock"}</Icon>&nbsp;
              {isUnlock ? "Unlocked" : "Locked"}
            </MDButton>
          </MDBox>
        </MDBox>
        <MDBox px={4} mt={1}>
          Follow the actions set by the creator to unlock this link. when you have done what the
          creator has asked you to do click on the now green unlock button. Do you like Sub1s? Would
          you like to create your own Sub1s link? Its never been easier to do so. Sign Up by
          clicking here and watch this in depth tutorial on how to use all features of Sub1s.
        </MDBox>
      </MDBox>
    </div>
  );
}

export default FeederPage;
