import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

// api
import { reqPostTask, destroyTask, reqGetCurrentTask } from "actions/task";

import { useModal } from "components/Modal";
import { ConfirmDialog } from "components/Modal/dialog";
import { host } from "configs.js";

function DoTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { setModal, unSetModal } = useModal();

  const currentTask = useSelector((state) => state.task.currentTask);
  const [inputKey, setInputKey] = useState("");

  useEffect(() => {
    if (!currentTask.id) {
      dispatch(reqGetCurrentTask());
    }
  }, []);

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
    dispatch(reqPostTask(currentTask.id, inputKey));
  };

  const doTask = () => {
    navigate("/feeder-page");
    // window.open(currentTask.related_data.origin);
  };

  const DisplayImg = ({ data }) => {
    // get link file;
    const relatedData = data ? JSON.parse(data) : {};
    const listFileId = relatedData.image;

    const urlGetFile = `${host}/api/files/`;
    if (listFileId && Array.isArray(listFileId) && listFileId.length) {
      return listFileId.map((fileId) => {
        return (
          <div key={fileId}>
            <img height={300} width={450} src={`${urlGetFile}${fileId}`} alt="#" />;
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
        <MDTypography sx={{ borderBottom: "solid 1px #c1c1c1" }} variant="h4">
          Nhiệm vụ hiện tại
        </MDTypography>
        <MDBox my={1}>
          {currentTask.id ? (
            <MDBox my={1}>
              <div>
                <MDTypography fontWeight="medium" color="dark" variant="xx">
                  Tên nhiệm vụ:
                </MDTypography>
                &nbsp;{currentTask && currentTask.name}
              </div>
              <div>
                <MDTypography fontWeight="medium" color="dark" variant="xx">
                  Mô tả:
                </MDTypography>
                &nbsp;{currentTask && currentTask.description}
              </div>
              <div>
                <MDTypography fontWeight="medium" color="dark" variant="xx">
                  Tiền thưởng:
                </MDTypography>
                &nbsp;{currentTask && currentTask.reward} đồng
              </div>
              <div>
                <div>
                  <MDTypography fontWeight="medium" color="dark" variant="xx">
                    Hướng dẫn làm nhiệm vụ:
                  </MDTypography>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <DisplayImg data={currentTask.related_data} />
                  </div>
                </div>
              </div>
              {currentTask.type_task === "LIKE_PAGE" && (
                <MDButton onClick={doTask} size="small" color="primary">
                  Làm nhiệm vụ ngay
                </MDButton>
              )}
              <MDBox my={1} component="form" role="form">
                <MDInput
                  type="text"
                  label="Nhập key hoàn thành"
                  value={inputKey}
                  onChange={onChangeKey}
                  fullWidth
                />
              </MDBox>
              <MDBox style={{ display: "flex", justifyContent: "flex-end" }}>
                <MDButton onClick={doneTask} size="small" color="info">
                  Hoàn thành nhiệm vụ
                </MDButton>
                <MDButton onClick={cancelTask} size="small" color="primary">
                  Hủy nhiệm vụ này
                </MDButton>
              </MDBox>
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
