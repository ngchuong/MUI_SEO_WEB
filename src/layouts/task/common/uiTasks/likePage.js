import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";

import { ListPost } from "../listPosts";
import { DisplayImg } from "../displayImg";

export const LikePage = ({ data }) => {
  if (!data) return null;
  return (
    <MDBox my={1}>
      <div>
        <MDTypography fontWeight="medium" color="dark" variant="xx">
          Tên nhiệm vụ:
        </MDTypography>
        &nbsp;{data.name}
      </div>
      <div>
        <MDTypography fontWeight="medium" color="dark" variant="xx">
          Mô tả:
        </MDTypography>
        &nbsp;{data.description}
      </div>
      <div>
        <MDTypography fontWeight="medium" color="dark" variant="xx">
          Tiền thưởng:
        </MDTypography>
        &nbsp;{data.reward} đồng
      </div>
      <div>
        <div>
          <MDTypography fontWeight="medium" color="dark" variant="xx">
            Hướng dẫn làm nhiệm vụ:
          </MDTypography>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              margin: 1,
            }}
          >
            <DisplayImg data={data.related_data} />
          </div>
        </div>
      </div>
    </MDBox>
  );
};
