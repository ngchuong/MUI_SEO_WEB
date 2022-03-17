import React, { useState, useEffect } from "react";
import get from "lodash/get";
import { useSelector, useDispatch } from "react-redux";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
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

    let link = relatedData.origin;
    if (currentTask.type_task === "REVIEW_SOCIAL") {
      link = relatedData.linkSocial;
    }
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
    <DashboardLayout>
      <DashboardNavbar />
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
            Bấm LIKE để làm nhiệm vụ
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
          Bạn hãy bấm vào Nút LIKE để thực hiện nhiệm vụ theo yêu cầu. Nếu làm đúng Nút LOCKED bên
          dưới sẽ được mở khóa thành Nút UNLOCKED, Bấm vào sẽ lấy được Mã hoàn thành Nhiệm vụ. Hệ
          thống sẽ mất một khoản thời gian ngắn để kiểm tra bạn đã thành đúng như yêu cầu hay chưa.
          Lưu ý: Hãy làm đúng theo yêu cầu nhiệm vụ, nếu hệ thống phát hiện yếu tố gian lận hoặc
          không làm đúng các bước bạn sẽ bị khóa tài khoản và hoàn toàn mất số tiền đã làm được
          trước đó.
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default FeederPage;
