import React, { useState, useEffect } from "react";
import get from "lodash/get";
import { useSelector, useDispatch } from "react-redux";
import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
// import { useNavigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import Icon from "@mui/material/Icon";

import MDBox from "components/MDBox";
import MDButton from "components/MDButton";
import MDTypography from "components/MDTypography";
import { isMobile } from "utils";
import "./index.css";

// white","primary","secondary","info","success","warning","error","light","dark
function FeederPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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

  const clickBack = () => {
    navigate("/do-task");
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
            fontSize="22px"
            textTransform="uppercase"
            color="dark"
            fontWeight="bold"
            opacity={0.8}
            sx={{ lineHeight: 0 }}
          >
            B???m LIKE ????? l??m nhi???m v???
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
          <MDBox mt={3}>
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
                H??? th???ng ??ang ki???m tra
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
              LIKE
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
              {isUnlock ? "M??? kh??a" : "Kh??a"}
            </MDButton>
          </MDBox>
          <MDBox>
            <MDButton style={{ width: "100px" }} onClick={clickBack} size="small" color="secondary">
              Quay l???i
            </MDButton>
          </MDBox>
        </MDBox>
        <MDBox sx={{ fontSize: 16 }} px={4} mt={1}>
          B???n h??y b???m v??o N??t LIKE ????? th???c hi???n nhi???m v??? theo y??u c???u. N???u l??m ????ng N??t Kho?? b??n
          d?????i s??? ???????c m??? kh??a th??nh N??t M??? kh??a, B???m v??o s??? l???y ???????c M?? ho??n th??nh Nhi???m v???. H???
          th???ng s??? m???t m???t kho???n th???i gian ng???n ????? ki???m tra b???n ???? th??nh ????ng nh?? y??u c???u hay ch??a.
          L??u ??: H??y l??m ????ng theo y??u c???u nhi???m v???, n???u h??? th???ng ph??t hi???n y???u t??? gian l???n ho???c
          kh??ng l??m ????ng c??c b?????c b???n s??? b??? kh??a t??i kho???n v?? ho??n to??n m???t s??? ti???n ???? l??m ???????c
          tr?????c ????.
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default FeederPage;
