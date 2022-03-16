import React, { useState } from "react";

import MDBox from "components/MDBox";
import MDInput from "components/MDInput";
import MDButton from "components/MDButton";
import TextField from "@mui/material/TextField";
import { DisplayImg } from "./image";

const InputFormContent = ({ inputVal, onChangeInput }) => {
  const [inputItem, setInputItem] = useState("");

  // list type
  const onChangePost = (e) => {
    setInputItem(e.target.value);
  };
  const addItem = () => {
    onChangeInput([...inputVal, inputItem]);
    setInputItem("");
  };

  const deleteItem = (item) => {
    const newArr = inputVal.filter((el) => el !== item);
    onChangeInput(newArr);
  };

  const ListItem = inputVal.map((el) => {
    return (
      <MDBox
        key={el}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        width="100%"
        sx={{ border: "1px solid #c1c1c1", padding: 2 }}
      >
        <MDBox>{el}</MDBox>
        <MDBox>
          <MDButton onClick={() => deleteItem(el)} size="small" color="primary">
            Xóa
          </MDButton>
        </MDBox>
      </MDBox>
    );
  });

  return (
    <MDBox sx={{ border: "1px solid #c1c1c1", borderRadius: "4px" }}>
      <MDBox display="flex" flexDirection="row" justifyContent="space-between" m={1} mb={2}>
        <MDInput type="text" label="Bài đăng" fullWidth value={inputItem} onChange={onChangePost} />
        <MDBox>
          <MDButton onClick={() => addItem()} size="small" color="info">
            Thêm mới
          </MDButton>
        </MDBox>
      </MDBox>
      <MDBox m={1}>Danh sách bài đăng{ListItem}</MDBox>
    </MDBox>
  );
};

export const FormReviewSocial = ({ onChangeInput, onChangeImg, inputVal, isCreate }) => {
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
        <InputFormContent
          inputVal={inputVal.list_posts}
          onChangeInput={onChangeInput("list_posts")}
        />
      </MDBox>
      <MDBox mb={2}>
        <TextField
          id="filled-multiline-static"
          label="Link to page social"
          fullWidth
          rows={4}
          value={inputVal.linkSocial}
          onChange={onChangeInput("linkSocial")}
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
