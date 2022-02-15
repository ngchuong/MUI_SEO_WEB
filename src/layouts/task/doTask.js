import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

// api
import { reqGetCurrentTask, reqPostTask } from "actions/task";

function DoTask() {
  const dispatch = useDispatch();
  const currentTask = useSelector((state) => state.task.currentTask);
  const [inputKey, setInputKey] = useState("");

  useEffect(() => {
    // get current task task
    dispatch(reqGetCurrentTask());
  }, []);

  const onChangeKey = (e) => {
    setInputKey(e.target.value);
  };

  const doneTask = () => {
    // request api send key to server, receive task
    dispatch(reqPostTask(inputKey));
  };

  console.log("currentTask", currentTask);

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDTypography sx={{ borderBottom: "solid 1px #c1c1c1" }} variant="h5">
          Nhiệm vụ hiện tại
        </MDTypography>
        <MDBox my={1}>
          <div>Tên nhiệm vụ: {currentTask && currentTask.name}</div>
          <div>Mô tả: {currentTask && currentTask.description}</div>
          <div>Tiền thưởng: {currentTask && currentTask.reward}</div>
          <div>
            <div>
              <MDBox
                component="img"
                src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
                alt="#"
                borderRadius="lg"
                shadow="md"
                width="100%"
                height="100%"
                position="relative"
                zIndex={1}
              />
            </div>
          </div>
          <MDBox component="form" role="form">
            <MDInput
              type="text"
              label="Nhập key hoàn thành"
              value={inputKey}
              onChange={onChangeKey}
            />
          </MDBox>

          <MDButton onClick={doneTask} size="small" color="primary">
            Hoàn thành nhiệm vụ
          </MDButton>
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default DoTask;
