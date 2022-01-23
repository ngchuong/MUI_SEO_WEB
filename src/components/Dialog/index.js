import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

import MDBox from "components/MDBox";
// import MDTypography from "components/MDTypography";
import MDInput from "components/MDInput";

export default function FormDialog({ handleClose, open, onSubmit }) {
  const [inputVal, setInputVal] = useState({
    name: "",
    description: "",
    reward: "",
    relatedData: "",
    priority: "",
    image: {},
  });

  const onChangeInput = (key) => (e) => {
    setInputVal({ ...inputVal, [key]: e.target.value });
  };
  const createTask = () => {
    onSubmit(inputVal);
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle>Tạo nhiệm vụ</DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
          <MDBox mb={2}>
            <MDInput
              type="text"
              label="Tên nhiệm vụ"
              fullWidth
              value={inputVal.name}
              onChange={onChangeInput("name")}
            />
          </MDBox>
          <MDBox mb={2}>
            <TextField
              id="filled-multiline-static"
              label="Mô tả"
              multiline
              fullWidth
              rows={4}
              value={inputVal.description}
              onChange={onChangeInput("description")}
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="text"
              label="Tiền thưởng"
              fullWidth
              value={inputVal.reward}
              onChange={onChangeInput("reward")}
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="text"
              label="Dữ liệu liên quan"
              fullWidth
              value={inputVal.relatedData}
              onChange={onChangeInput("relatedData")}
            />
          </MDBox>
          <MDBox mb={2}>
            <MDInput
              type="text"
              label="Độ ưu tiên"
              fullWidth
              value={inputVal.priority}
              onChange={onChangeInput("priority")}
            />
          </MDBox>

          <MDBox mb={2}>
            <input type="file" onChange={onChangeInput("image")} multiple />
          </MDBox>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Quay về</Button>
          <Button onClick={createTask}>Tạo mới</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
