import React, { useState } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

export default function FormDialog({ handleClose, open }) {
  const [inputVal, setInputVal] = useState({ description: "", image: {} });

  const onChangeInput = (key) => (e) => {
    setInputVal({ ...inputVal, [key]: e.target.value });
  };
  const createTask = () => {
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Tạo nhiệm vụ</DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          {/* <DialogContentText>
            To subscribe to this website, please enter your email address here. We will send updates
            occasionally.
          </DialogContentText> */}
          <TextField
            id="filled-multiline-static"
            label="Mô tả"
            multiline
            rows={4}
            value={inputVal.description}
            onChange={onChangeInput("description")}
            variant="filled"
          />

          <input type="file" onChange={onChangeInput("image")} multiple />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Quay về</Button>
          <Button onClick={createTask}>Tạo mới</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
