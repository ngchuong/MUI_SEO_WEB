import React from "react";

import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import TextField from "@mui/material/TextField";

import { InputImg } from "../../InputImage";

export const FormTrafficWeb = ({ onChangeInput, onChangeImg, inputVal }) => {
  return (
    <div>
      <MDBox mb={2} mt={2}>
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
          label="Số lượt làm nhiệm vụ"
          fullWidth
          value={inputVal.max_turn}
          onChange={onChangeInput("max_turn")}
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
        <InputImg multiple={true} onDone={onChangeImg} />
      </MDBox>
    </div>
  );
};
