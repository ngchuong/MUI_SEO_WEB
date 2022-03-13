import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Card from "@mui/material/Card";

// Material Dashboard 2 React components
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import { host } from "configs.js";
import { getDate } from "utils";

const DisplayTaskDetail = ({ info, shadow }) => {
  const relatedData = info.related_data ? JSON.parse(info.related_data) : {};
  const dataTask = [
    {
      key: "type_task",
      label: "Loại nhiệm vụ",
      value: info.type_task,
    },
    {
      key: "name",
      label: "Tên nhiệm vụ",
      value: info.name,
    },
    {
      key: "description",
      label: "Mô tả",
      value: info.description,
    },
    {
      key: "origin",
      label: "Trang web đích",
      value: info.origin,
    },
    {
      key: "key_word",
      label: "Từ khóa",
      value: info.key_word,
    },
    {
      key: "list_posts",
      label: "Bài đăng",
      value: info.list_posts,
    },
    {
      key: "unlock_link",
      label: "Link để lấy key hoàn thành",
      value: info.unlock_link,
    },
    {
      key: "key",
      label: "Key hoàn thành",
      value: relatedData.key,
    },
    {
      key: "priority",
      label: "Độ ưu tiên",
      value: info.priority,
    },
    {
      key: "reward",
      label: "Tiền thưởng",
      value: `${info.reward} đồng`,
    },
    {
      key: "created_at",
      label: "Ngày tạo nhiệm vụ",
      value: getDate(info.created_at),
    },
  ];

  // Render the card info items
  const renderItems = dataTask.map((item, index) => {
    if (item.key === "list_posts") {
      return (
        <MDBox key={item.key} py={1} pr={2}>
          <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
            {item.label}: &nbsp;
          </MDTypography>
          {item.value.length ? (
            <MDBox sx={{ border: "1px solid #c1c1c1" }} p={1}>
              <MDTypography variant="button" fontWeight="regular" color="text">
                {item.value.map((el) => {
                  return (
                    <div
                      style={{ border: "1px solid #c1c1c1", marginBottom: 2, padding: 1 }}
                      key={el}
                    >
                      {el}
                    </div>
                  );
                })}
              </MDTypography>
            </MDBox>
          ) : null}
        </MDBox>
      );
    }
    return (
      <MDBox key={item.key} display="flex" py={1} pr={2}>
        <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
          {item.label}: &nbsp;
        </MDTypography>
        <MDTypography variant="button" fontWeight="regular" color="text">
          &nbsp;{item.value}
        </MDTypography>
      </MDBox>
    );
  });

  // display image
  const DisplayImg = () => {
    const files = relatedData.image;
    if (files && Array.isArray(files)) {
      return files.map((fileId) => {
        if (fileId) {
          return (
            <div key={fileId} style={{ margin: 1 }}>
              <img height={300} width={450} src={`${host}/files/${fileId}`} alt="#" />
            </div>
          );
        }
        return null;
      });
    }
    return null;
  };

  return (
    <Card sx={{ height: "100%", boxShadow: !shadow && "none" }}>
      {/* <MDBox display="flex" justifyContent="space-between" alignItems="center" pt={2} px={2}>
        <MDTypography variant="h6" fontWeight="medium" textTransform="capitalize">
          Chi tiết nhiệm vụ
        </MDTypography>
      </MDBox> */}
      <MDBox display="flex" justifyContent="space-between" p={2}>
        <MDBox>{renderItems}</MDBox>
        <MDBox width="50%">
          <MDTypography variant="button" fontWeight="bold" textTransform="capitalize">
            Ảnh mô tả:
          </MDTypography>
          <MDBox style={{ display: "flex", flexDirection: "column" }}>
            <DisplayImg />
          </MDBox>
        </MDBox>
      </MDBox>
    </Card>
  );
};

export default function FormDetailTask({ handleClose, open, dataForm }) {
  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle>Chi tiết nhiệm vụ</DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          <DisplayTaskDetail info={dataForm} shadow={false} />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Quay về</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
