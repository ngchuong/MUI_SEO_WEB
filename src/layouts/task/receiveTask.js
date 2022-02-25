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

  const DisplayImg = ({ data }) => {
    // get link file;
    const relatedData = data ? JSON.parse(data) : {};
    const listFileId = relatedData.image;

    const host = "http://localhost:3000";
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
          Nhận nhiệm vụ
        </MDTypography>
        <MDBox my={1}>
          {randomTask.id ? (
            <div>
              <div>
                <MDTypography fontWeight="medium" color="dark" variant="xx">
                  Tên nhiệm vụ:
                </MDTypography>
                &nbsp;
                {randomTask && randomTask.name}
              </div>
              <div>
                <MDTypography fontWeight="medium" color="dark" variant="xx">
                  Mô tả:
                </MDTypography>
                &nbsp; {randomTask && randomTask.description}
              </div>
              <div>
                <MDTypography fontWeight="medium" color="dark" variant="xx">
                  Tiền thưởng:
                </MDTypography>{" "}
                &nbsp;{randomTask && randomTask.reward} đồng
              </div>
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
                  <DisplayImg data={randomTask.related_data} />
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
