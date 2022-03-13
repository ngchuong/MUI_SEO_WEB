import React, { useEffect, useState, useMemo } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

import { useModal } from "components/Modal";
import { SimpleDialog, ConfirmDialog, AlertDialog } from "components/Modal/dialog";
import { isMobile } from "utils";

import { updateCurrentTask } from "store/reducers/task";
import { reqReceiveTask, reqGetRandomTask, reqPostTask, destroyTask } from "../../actions/task";

import { requestFinishTask } from "../../api/task";

import { LikePage } from "./common/uiTasks/likePage";
import { ReviewSocial } from "./common/uiTasks/reviewSocial";
import { SubYoutube } from "./common/uiTasks/subYoutube";
import { Traffic } from "./common/uiTasks/traffic";

const SwitchUiTask = ({ data }) => {
  const type = data.type_task;
  switch (type) {
    case "TRAFFIC":
      return <Traffic data={data} />;
    case "SUB_YOUTUBE":
      return <SubYoutube data={data} />;
    case "LIKE_PAGE":
    case "JOIN_GROUP":
      return <LikePage data={data} />;
    case "REVIEW_SOCIAL":
      return <ReviewSocial data={data} />;
    default:
      break;
  }
};

const UI = ({ data }) => {
  if (!data) return null;
  if (data && !data.id) return null;
  return <SwitchUiTask data={data} />;
};

const ControllerButton = ({ currentTask, onChangeKey, inputKey, doTask, doneTask, cancelTask }) => {
  if (!currentTask.id) {
    return <div>Không có nhiệm vụ</div>;
  }
  return (
    <MDBox>
      {(currentTask.type_task === "LIKE_PAGE" || currentTask.type_task === "JOIN_GROUP") && (
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
        &nbsp;
        <MDButton onClick={cancelTask} size="small" color="primary">
          Hủy nhiệm vụ này
        </MDButton>
      </MDBox>
    </MDBox>
  );
};

function DoOnlyTask() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { setModal, unSetModal } = useModal();
  const [inputKey, setInputKey] = useState("");

  const currentTask = useSelector((state) => state.task.currentTask);
  // const randomTask = useSelector((state) => state.task.randomTask);
  // request get random task
  useEffect(() => {
    if (!currentTask.id) {
      dispatch(reqReceiveTask());
    }
  }, [currentTask]);

  // do task
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

  const doneTask = async () => {
    const updateTask = () => {
      dispatch(reqReceiveTask());
      unSetModal();
    };
    // request api send key to server, receive task
    let response;
    try {
      response = await requestFinishTask(currentTask.id, inputKey);
    } catch (err) {
      setModal(<SimpleDialog content={<div>Key không đúng</div>} />);
    }
    if (response && /20[0-9]/.test(response.status)) {
      setModal(<AlertDialog content={<div>Làm nhiệm vụ thành công</div>} onSubmit={updateTask} />);
    } else {
      setModal(<SimpleDialog content={<div>Key không đúng</div>} />);
    }
  };

  const doTask = () => {
    navigate("/feeder-page");
  };

  // TODO: remember remove hardcode isMobile
  return (
    <DashboardLayout>
      <DashboardNavbar />
      {isMobile() ? (
        <MDBox py={3}>
          <MDTypography sx={{ borderBottom: "solid 1px #c1c1c1" }} variant="h4">
            Làm nhiệm vụ
          </MDTypography>
          <MDBox my={1}>
            <UI data={currentTask} />
            <ControllerButton
              currentTask={currentTask}
              onChangeKey={onChangeKey}
              inputKey={inputKey}
              doTask={doTask}
              doneTask={doneTask}
              cancelTask={cancelTask}
            />
          </MDBox>
        </MDBox>
      ) : (
        <MDTypography sx={{ fontStyle: "italic" }}>Chỉ khả dụng trên điện thoại.</MDTypography>
      )}
    </DashboardLayout>
  );
}

export default DoOnlyTask;
