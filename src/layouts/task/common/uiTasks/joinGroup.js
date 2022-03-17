import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import { DisplayImg } from "../displayImg";

import "./css.css";

export const JoinGroup = ({ data }) => {
  if (!data) return null;
  const relatedData = data.related_data ? JSON.parse(data.related_data) : {};
  const openOriginLink = () => {
    window.open(relatedData.origin);
  };
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
        <MDBox>
          <textarea
            style={{ fontSize: 16, fontWeight: 500 }}
            rows="12"
            disabled
            defaultValue={data.description}
          />
        </MDBox>
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
      <MDBox>
        <MDButton size="small" color="primary" onClick={openOriginLink}>
          Làm nhiệm vụ ngay
        </MDButton>
      </MDBox>
    </MDBox>
  );
};
