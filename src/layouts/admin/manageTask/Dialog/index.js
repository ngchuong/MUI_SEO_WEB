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

export default function FormDialog({ handleClose, open, onSubmit, dataForm }) {
  const [typeForm, setTypeForm] = useState("TRAFFIC");
  const relatedData = dataForm && dataForm.related_data ? JSON.parse(dataForm.related_data) : {};
  const defaultInput = dataForm
    ? { ...dataForm, origin: relatedData.origin, key_word: relatedData.key_word }
    : {
        name: "",
        description: "",
        origin: "",
        key_word: "",
        reward: "",
        max_turn: "",
        priority: "",
      };

  const [inputVal, setInputVal] = useState(defaultInput);
  const [inputImg, setInputImg] = useState([]);

  // change type form
  const onSwitchTypeForm = (e) => {
    setTypeForm(e.target.value);

    // when change type task reset state
    setInputVal(defaultInput);
    setInputImg([]);
  };

  // change input
  const onChangeImg = (e) => {
    setInputImg(e.target.files);
  };
  const onChangeInput = (key) => (e) => {
    setInputVal({ ...inputVal, [key]: e.target.value });
  };

  // do create task
  const handleSubmit = () => {
    const { name, description, origin, key_word, reward, max_turn, priority } = inputVal;
    const data = {
      name,
      description,
      reward,
      max_turn,
      priority,
      type_task: typeForm,
      related_data: {
        image: inputImg,
        origin,
        key_word,
        key: uuidv4(),
      },
    };

    // console.log(data);
    onSubmit(data, inputImg);
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
              <MenuItem value="TRAFFIC">Traffic Web</MenuItem>
              <MenuItem value="SUB_YOUTUBE">Sub Youtube</MenuItem>
              <MenuItem value="LIKE_PAGE">Like Page Facebook</MenuItem>
              <MenuItem value="JOIN_GROUP">Join Group Facebook</MenuItem>
            </Select>
          </FormControl>

          <FormTrafficWeb
            onChangeInput={onChangeInput}
            onChangeImg={onChangeImg}
            inputVal={inputVal}
            inputImg={inputImg}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Quay về</Button>
          <Button onClick={handleSubmit}>{dataForm ? "Cập nhật" : "Tạo mới"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
