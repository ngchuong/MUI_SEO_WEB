import React from "react";

import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import TextField from "@mui/material/TextField";
import { DisplayImg } from "./image";

export const FormLikePage = ({ onChangeInput, onChangeImg, inputVal, isCreate }) => {
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
          label="Link để lấy key hoàn thành"
          fullWidth
          rows={4}
          value={inputVal.unlock_link}
          onChange={onChangeInput("unlock_link")}
        />
      </MDBox>
      <MDBox mb={2}>
        <TextField
          id="filled-multiline-static"
          label="Trang web đích"
          fullWidth
          rows={4}
          value={inputVal.origin}
          onChange={onChangeInput("origin")}
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
        <TextField
          id="filled-multiline-static"
          label="Key hoàn thành"
          fullWidth
          rows={4}
          value={inputVal.key}
          onChange={onChangeInput("key")}
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
      {isCreate ? (
        <MDBox mb={2}>
          Nhập ảnh: &nbsp;
          <input type="file" onChange={onChangeImg} multiple id="idImg" />
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              flexWrap: "wrap",
              // justifyContent: "space-around",
            }}
          >
            <DisplayImg />
          </div>
        </MDBox>
      ) : null}
    </div>
  );
};
