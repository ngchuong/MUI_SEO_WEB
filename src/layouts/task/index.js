import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";

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
  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <div style={{ borderBottom: "solid 1px #c1c1c1" }}>Nhận nhiệm vụ</div>
        <div>
          <SwitchTask />
        </div>
      </MDBox>
    </DashboardLayout>
  );
}

export default DoTask;
