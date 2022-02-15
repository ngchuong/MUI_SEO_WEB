import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// api
import { reqGetRandomTask } from "actions/task";
import { requestReceiveTask } from "api/task";

import { useModal } from "components/Modal";
import { SimpleDialog } from "components/Modal/dialog";

function ReceiveTask() {
  const dispatch = useDispatch();
  const { setModal, unSetModal } = useModal();

  const randomTask = useSelector((state) => state.task.randomTask);
  console.log("randomTask", randomTask);

  useEffect(() => {
    // get random task
    dispatch(reqGetRandomTask());
  }, []);

  const receiveRandomTask = async () => {
    const resReceiveTask = await requestReceiveTask(randomTask.id);
    console.log(resReceiveTask, "1");
    if (resReceiveTask && resReceiveTask.status === 201) {
      setModal(<SimpleDialog content={<div>Nhận nhiệm vụ thành công!</div>} />);
    } else {
      setModal(<SimpleDialog content={<div>Nhận nhiệm vụ thất bại!</div>} />);
    }
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDTypography sx={{ borderBottom: "solid 1px #c1c1c1" }} variant="h5">
          Nhận nhiệm vụ
        </MDTypography>
        <MDBox my={1}>
          {randomTask.id ? (
            <div>
              <div>Tên nhiệm vụ: {randomTask && randomTask.name}</div>
              <div>Mô tả: {randomTask && randomTask.description}</div>
              <div>Tiền thưởng: {randomTask && randomTask.reward}</div>
              <MDButton onClick={receiveRandomTask} size="small" color="primary">
                Nhận nhiệm vụ
              </MDButton>
            </div>
          ) : (
            <div>Hiện tại không có nhiệm vụ nào</div>
          )}
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default ReceiveTask;
