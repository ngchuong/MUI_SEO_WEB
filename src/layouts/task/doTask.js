import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

// api
import { reqPostTask, destroyTask } from "actions/task";

import { useModal } from "components/Modal";
import { ConfirmDialog } from "components/Modal/dialog";

function DoTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setModal, unSetModal } = useModal();

  const currentTask = useSelector((state) => state.task.currentTask);
  const [inputKey, setInputKey] = useState("");

  const onChangeKey = (e) => {
    setInputKey(e.target.value);
  };

  const cancelTask = () => {
    const handleDestroyTask = () => {
      dispatch(destroyTask(currentTask.id));
      unSetModal();
    };
    setModal(
      <ConfirmDialog
        content={<div>Bạn muốn xóa nhiệm vụ này không?</div>}
        onSubmit={() => handleDestroyTask()}
        onCancel={unSetModal}
      />
    );
  };

  const doneTask = () => {
    // request api send key to server, receive task
    dispatch(reqPostTask(inputKey));
  };

  const doTask = () => {
    navigate("/feeder-page");
    // window.open(currentTask.related_data.origin);
  };

  const DisplayImg = (data1) => {
    const data = [
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
      "https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",
    ];
    if (data && Array.isArray(data)) {
      return data.map((el, index) => {
        return (
          <div key={`${el}_${index}`}>
            <img width={450} height={300} src={el} alt="#" />
          </div>
        );
      });
    }
    return null;
  };

  return (
    <DashboardLayout>
      <DashboardNavbar />
      <MDBox py={3}>
        <MDTypography sx={{ borderBottom: "solid 1px #c1c1c1" }} variant="h5">
          Nhiệm vụ hiện tại
        </MDTypography>
        <MDBox my={1}>
          {currentTask.id ? (
            <MDBox my={1}>
              <div>Tên nhiệm vụ: {currentTask && currentTask.name}</div>
              <div>Mô tả: {currentTask && currentTask.description}</div>
              <div>Tiền thưởng: {currentTask && currentTask.reward} đồng</div>
              <div>
                <div>
                  <div>Hướng dẫn làm nhiệm vụ: </div>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <DisplayImg data={currentTask.related_data && currentTask.related_data.image} />
                  </div>
                </div>
              </div>
              {currentTask.type_task === "LIKE_PAGE" && (
                <MDButton onClick={doTask} size="small" color="primary">
                  Làm nhiệm vụ ngay
                </MDButton>
              )}
              <MDBox component="form" role="form">
                <MDInput
                  type="text"
                  label="Nhập key hoàn thành"
                  value={inputKey}
                  onChange={onChangeKey}
                />
              </MDBox>
              <MDButton onClick={doneTask} size="small" color="info">
                Hoàn thành nhiệm vụ
              </MDButton>
              <MDButton onClick={cancelTask} size="small" color="primary">
                Hủy nhiệm vụ này
              </MDButton>
            </MDBox>
          ) : (
            <MDBox>Bạn chưa nhận nhiệm vụ</MDBox>
          )}
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default DoTask;
