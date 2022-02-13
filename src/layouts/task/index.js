import React, { useEffect } from "react";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// api
import { reqGetCurrentTask } from "actions/task";

// page
import TrafficWeb from "./ListTask/TrafficWeb";
import SubYoutube from "./ListTask/SubYoutube";
import LikePage from "./ListTask/LikePage";
import JoinGroup from "./ListTask/JoinGroup";

function SwitchTask() {
  // TODO: get type task, task
  const typeTask = "trafficWeb";
  switch (typeTask) {
    case "trafficWeb": {
      return <TrafficWeb />;
    }
    case "subYoutube": {
      return <SubYoutube />;
    }
    case "likePage": {
      return <LikePage />;
    }
    case "joinGroup": {
      return <JoinGroup />;
    }
    default:
      break;
  }
}

function DoTask() {
  useEffect(() => {
    // TODO: get api to make task
    reqGetCurrentTask();
  }, []);

  const receiveRandomTask = () => {};

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDTypography sx={{ borderBottom: "solid 1px #c1c1c1" }} variant="h5">
          Nhận nhiệm vụ
        </MDTypography>
        <MDBox my={1}>
          <MDButton onClick={receiveRandomTask} size="small" color="primary">
            Nhận nhiệm vụ ngẫu nhiên
          </MDButton>
        </MDBox>

        <div style={{ borderTop: "solid 1px #c1c1c1" }}>
          <SwitchTask />
        </div>
      </MDBox>
    </DashboardLayout>
  );
}

export default DoTask;
