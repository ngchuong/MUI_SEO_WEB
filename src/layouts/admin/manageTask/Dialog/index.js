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
import { FormLikePage } from "./Form/FormLikePage";
import { FormReviewSocial } from "./Form/FormReviewSocial";
import { FormSubYoutube } from "./Form/FormSubYoutube";

const SwitchForm = ({ typeForm, onChangeInput, onChangeImg, inputVal, inputImg, isCreate }) => {
  switch (typeForm) {
    case "TRAFFIC": {
      return (
        <FormTrafficWeb
          onChangeInput={onChangeInput}
          onChangeImg={onChangeImg}
          inputVal={inputVal}
          inputImg={inputImg}
          isCreate={isCreate}
        />
      );
    }
    case "SUB_YOUTUBE": {
      return (
        <FormSubYoutube
          onChangeInput={onChangeInput}
          onChangeImg={onChangeImg}
          inputVal={inputVal}
          inputImg={inputImg}
          isCreate={isCreate}
        />
      );
    }
    case "LIKE_PAGE":
    case "JOIN_GROUP": {
      return (
        <FormLikePage
          onChangeInput={onChangeInput}
          onChangeImg={onChangeImg}
          inputVal={inputVal}
          inputImg={inputImg}
          isCreate={isCreate}
        />
      );
    }
    case "REVIEW_SOCIAL": {
      return (
        <FormReviewSocial
          onChangeInput={onChangeInput}
          onChangeImg={onChangeImg}
          inputVal={inputVal}
          inputImg={inputImg}
          isCreate={isCreate}
        />
      );
    }

    default:
      return (
        <FormTrafficWeb
          onChangeInput={onChangeInput}
          onChangeImg={onChangeImg}
          inputVal={inputVal}
          inputImg={inputImg}
          isCreate={isCreate}
        />
      );
  }
};

export default function FormDialog({ handleClose, open, onSubmit, dataForm }) {
  const typeTaskDefault = dataForm ? dataForm.type_task : "TRAFFIC";
  const [typeForm, setTypeForm] = useState(typeTaskDefault);
  const relatedData = dataForm && dataForm.related_data ? JSON.parse(dataForm.related_data) : {};
  const defaultInput = dataForm
    ? {
        ...dataForm,
        origin: relatedData.origin,
        key_word: relatedData.key_word,
        key: relatedData.key,
        linkSocial: relatedData.linkSocial,
      }
    : {
        name: "",
        description: "",
        origin: "",
        key_word: "",
        list_posts: [],
        unlock_link: "",
        linkSocial: "",
        reward: "",
        max_turn: "",
        priority: "",
        key: "",
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
    const value = key === "list_posts" ? e : e.target.value;
    setInputVal({ ...inputVal, [key]: value });
  };

  // do create task
  const handleSubmit = () => {
    const {
      name,
      description,
      origin,
      key_word,
      linkSocial,
      list_posts,
      unlock_link,
      reward,
      max_turn,
      priority,
      key,
    } = inputVal;
    const data = {
      name,
      description,
      list_posts,
      unlock_link,
      reward,
      max_turn,
      priority,
      type_task: typeForm,
      related_data: {
        image: dataForm ? relatedData.image : inputImg,
        origin,
        key_word,
        linkSocial,
        key: key && key.length ? key : uuidv4(),
      },
    };

    onSubmit(data, inputImg);
    handleClose();
  };

  const isCreate = !dataForm;

  return (
    <div>
      <Dialog open={open} onClose={handleClose} fullScreen>
        <DialogTitle>{isCreate ? "T???o nhi???m v???" : "C???p nh???t nhi???m v???"}</DialogTitle>
        <DialogContent style={{ display: "flex", flexDirection: "column" }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Lo???i nhi???m v???</InputLabel>
            <Select
              style={{ padding: "10px 0" }}
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={typeForm}
              label="Lo???i nhi???m v???"
              onChange={onSwitchTypeForm}
            >
              <MenuItem value="TRAFFIC">Traffic Web</MenuItem>
              <MenuItem value="SUB_YOUTUBE">Sub Youtube</MenuItem>
              <MenuItem value="LIKE_PAGE">Like Page Facebook</MenuItem>
              <MenuItem value="JOIN_GROUP">Join Group Facebook</MenuItem>
              <MenuItem value="REVIEW_SOCIAL">Review Social</MenuItem>
            </Select>
          </FormControl>
          <SwitchForm
            typeForm={typeForm}
            onChangeInput={onChangeInput}
            onChangeImg={onChangeImg}
            inputVal={inputVal}
            inputImg={inputImg}
            isCreate={isCreate}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Quay v???</Button>
          <Button onClick={handleSubmit}>{dataForm ? "C???p nh???t" : "T???o m???i"}</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
