import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

import { coppyToClipBoard } from "utils";

export const KeyWord = ({ data }) => {
  if (!data) return "";
  const id = "idKeyword";
  return (
    <MDBox display="flex" justifyContent="space-between" m={1}>
      <MDBox id={id} sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
        {data}
      </MDBox>
      <MDBox>
        <MDButton size="small" onClick={() => coppyToClipBoard(id)}>
          Coppy
        </MDButton>
      </MDBox>
    </MDBox>
  );
};
