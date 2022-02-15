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

import { v4 as uuidv4 } from "uuid";

import { FormTrafficWeb } from "./Form/FormTrafficWeb";
import { FormSubYtb } from "./Form/FormSubYtb";
import { FormLikePage } from "./Form/FormLikeFB";
import { FormJoinGroup } from "./Form/FormJoinGroup";

const SwitchForm = ({ type, onChangeInput, onChangeImg, inputVal, inputImg }) => {
  let display;
  switch (type) {
    case "TRAFFIC":
      display = (
        <FormTrafficWeb
          onChangeInput={onChangeInput}
          onChangeImg={onChangeImg}
          inputVal={inputVal}
          inputImg={inputImg}
        />
      );
      break;
    case "SUB_YOUTUBE":
      display = <FormSubYtb />;
      break;
    case "LIKE_PAGE":
      display = <FormLikePage />;
      break;
    case "JOIN_GROUP":
      display = <FormJoinGroup />;
      break;
    default:
      display = (
        <FormTrafficWeb
          onChangeInput={onChangeInput}
          onChangeImg={onChangeImg}
          inputVal={inputVal}
          inputImg={inputImg}
        />
      );
      break;
  }

  return display;
};

export default function FormDialog({ handleClose, open, onSubmit }) {
  const [typeForm, setTypeForm] = useState("TRAFFIC");
  const defaultInput = {
    name: "",
    description: "",
    host: "",
    key_word: "",
    reward: "",
    max_turn: "",
    priority: "",
    related_data: {},
  };
  const [inputVal, setInputVal] = useState(defaultInput);
  const [inputImg, setInputImg] = useState([]);

  console.log(inputImg);

  // change type form
  const onSwitchTypeForm = (e) => {
    setTypeForm(e.target.value);

    // when change type task reset state
    setInputVal(defaultInput);
    setInputImg([]);
  };

  // change input
  const onChangeImg = (e) => {
    setInputImg(e);
  };
  const onChangeInput = (key) => (e) => {
    setInputVal({ ...inputVal, [key]: e.target.value });
  };

  // do create task
  const createTask = () => {
    const { name, description, host, key_word, reward, max_turn, priority } = inputVal;
    const data = {
      name,
      description,
      reward,
      max_turn,
      priority,
      type_task: typeForm,
      related_data: {
        image: inputImg,
        host,
        key_word,
        key: uuidv4(),
      },
    };

    console.log(data);
    // onSubmit(data);
    // handleClose();
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
              <MenuItem value="TRAFFIC">Traffic Web</MenuItem>
              <MenuItem value="SUB_YOUTUBE">Sub Youtube</MenuItem>
              <MenuItem value="LIKE_PAGE">Like Page Facebook</MenuItem>
              <MenuItem value="JOIN_GROUP">Join Group Facebook</MenuItem>
            </Select>
          </FormControl>

          <SwitchForm
            type={typeForm}
            onChangeInput={onChangeInput}
            onChangeImg={onChangeImg}
            inputVal={inputVal}
            inputImg={inputImg}
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
