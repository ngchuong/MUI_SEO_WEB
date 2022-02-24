import React from "react";

import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import TextField from "@mui/material/TextField";

// import { InputImg } from "components/InputImage";
// import { InputImage } from "components/InputImage/test";

export const FormTrafficWeb = ({ onChangeInput, onChangeImg, inputVal, inputImg }) => {
  const displayImg =
    Array.isArray(inputImg) &&
    inputImg.map((img) => {
      return (
        <div key={img.base64} style={{ marginRight: "4px" }}>
          <img width={100} height={100} src={img.base64} alt="#" />
        </div>
      );
    });
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
        <TextField
          id="filled-multiline-static"
          label="Trang web đích"
          fullWidth
          rows={4}
          value={inputVal.host}
          onChange={onChangeInput("host")}
        />
      </MDBox>
      <MDBox mb={2}>
        <TextField
          id="filled-multiline-static"
          label="Từ khóa search"
          fullWidth
          rows={4}
          value={inputVal.key_word}
          onChange={onChangeInput("key_word")}
        />
      </MDBox>
      <MDBox mb={2}>
        <MDInput
          type="number"
          label="Tiền thưởng"
          fullWidth
          value={inputVal.reward}
          onChange={onChangeInput("reward")}
        />
      </MDBox>
      <MDBox mb={2}>
        <MDInput
          type="number"
          label="Số lượt làm nhiệm vụ"
          fullWidth
          value={inputVal.max_turn}
          onChange={onChangeInput("max_turn")}
        />
      </MDBox>
      <MDBox mb={2}>
        <MDInput
          type="number"
          label="Độ ưu tiên"
          fullWidth
          value={inputVal.priority}
          onChange={onChangeInput("priority")}
        />
      </MDBox>
      <MDBox mb={2}>
        {/* <InputImg multiple={true} onDone={onChangeImg} /> */}
        {/* <InputImage multiple={true} handleChange={onChangeImg} /> */}
        <input type="file" onChange={onChangeImg} multiple />
        <div style={{ display: "flex" }}>{displayImg}</div>
      </MDBox>
    </div>
  );
};
