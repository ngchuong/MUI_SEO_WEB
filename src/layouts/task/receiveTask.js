import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import DashboardLayout from "examples/LayoutContainers/DashboardLayout";
import DashboardNavbar from "examples/Navbars/DashboardNavbar";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

// api
import { requestReceiveTask } from "api/task";

import { useModal } from "components/Modal";
import { SimpleDialog } from "components/Modal/dialog";

function ReceiveTask() {
  const dispatch = useDispatch();
  const { setModal, unSetModal } = useModal();

  const randomTask = useSelector((state) => state.task.randomTask);

  const receiveRandomTask = async () => {
    let resReceiveTask;
    try {
      resReceiveTask = await requestReceiveTask(randomTask.id);
    } catch (err) {
      setModal(<SimpleDialog content={<div>Có lỗi xảy ra!</div>} />);
    }

    if (resReceiveTask && /20[0-9]/.test(resReceiveTask.status)) {
      setModal(<SimpleDialog content={<div>Nhận nhiệm vụ thành công!</div>} />);
    } else {
      setModal(
        <SimpleDialog
          content={<div>Vui lòng hoàn thành nhiệm vụ hiện tại trước khi nhận nhiệm vụ mới!</div>}
        />
      );
    }
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
            <img src={el} alt="#" />
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
          Nhận nhiệm vụ
        </MDTypography>
        <MDBox my={1}>
          {randomTask.id ? (
            <div>
              <div>Tên nhiệm vụ: {randomTask && randomTask.name}</div>
              <div>Mô tả: {randomTask && randomTask.description}</div>
              <div>Tiền thưởng: {randomTask && randomTask.reward} đồng</div>
              <div>
                <div>Hướng dẫn làm nhiệm vụ: </div>
                <div
                  style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <DisplayImg data={randomTask.related_data && randomTask.related_data.image} />
                </div>
              </div>
              <MDButton onClick={receiveRandomTask} size="small" color="primary">
                Nhận nhiệm vụ
              </MDButton>
            </div>
          ) : (
            <div>Hiện tại không có nhiệm vụ nào!</div>
          )}
        </MDBox>
      </MDBox>
    </DashboardLayout>
  );
}

export default ReceiveTask;
