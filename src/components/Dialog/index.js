import React, { useState } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import Select from "@mui/material/Select";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";

import { FormTrafficWeb } from "./Form/FormTrafficWeb";
import { FormSubYtb } from "./Form/FormSubYtb";
import { FormLikePage } from "./Form/FormLikeFB";
import { FormJoinGroup } from "./Form/FormJoinGroup";

const SwitchForm = ({ type, onChangeInput, onChangeImg, inputVal }) => {
  let display;
  switch (type) {
    case "traffic":
      display = (
        <FormTrafficWeb
          onChangeInput={onChangeInput}
          onChangeImg={onChangeImg}
          inputVal={inputVal}
        />
      );
      break;
    case "subyoutube":
      display = <FormSubYtb />;
      break;
    case "likepagefb":
      display = <FormLikePage />;
      break;
    case "joingroupfb":
      display = <FormJoinGroup />;
      break;
    default:
      display = (
        <FormTrafficWeb
          onChangeInput={onChangeInput}
          onChangeImg={onChangeImg}
          inputVal={inputVal}
        />
      );
      break;
  }

  return display;
};

export default function FormDialog({ handleClose, open, onSubmit }) {
  const [typeForm, setTypeForm] = useState("traffic");
  const defaultInput = {
    name: "",
    description: "",
    reward: "",
    max_turn: "",
    priority: "",
    related_data: {},
  };
  const [inputVal, setInputVal] = useState(defaultInput);
  const [inputImg, setInputImg] = useState([]);

  // change type form
  const onSwitchTypeForm = (e) => {
    setTypeForm(e.target.value);
  };

  // change input
  const onChangeImg = (e) => {
    setInputImg(e);

    // when change type task reset state
    setInputVal(defaultInput);
  };
  const onChangeInput = (key) => (e) => {
    setInputVal({ ...inputVal, [key]: e.target.value });
  };

  // do create task
  const createTask = () => {
    const data = {
      ...inputVal,
      type_task: typeForm,
      related_data: {
        image: inputImg,
      },
    };
    onSubmit(data);
    handleClose();
  };

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle>Tạo nhiệm vụ</DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Loại nhiệm vụ</InputLabel>
            <Select
              style={{ padding: "10px 0" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={typeForm}
              label="Loại nhiệm vụ"
              onChange={onSwitchTypeForm}
            >
              <MenuItem value="traffic">Traffic Web</MenuItem>
              <MenuItem value="subyoutube">Sub Youtube</MenuItem>
              <MenuItem value="likepagefb">Like Page Facebook</MenuItem>
              <MenuItem value="joingroupfb">Join Group Facebook</MenuItem>
            </Select>
          </FormControl>

          <SwitchForm
            type={typeForm}
            onChangeInput={onChangeInput}
            onChangeImg={onChangeImg}
            inputVal={inputVal}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Quay về</Button>
          <Button onClick={createTask}>Tạo mới</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
