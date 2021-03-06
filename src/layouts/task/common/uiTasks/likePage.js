import { useNavigate } from "react-router-dom";

import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";

import { DisplayImg } from "../displayImg";
import "./css.css";

export const LikePage = ({ data }) => {
  const navigate = useNavigate();

  if (!data) return null;
  const doTask = () => {
    navigate("/feeder-page");
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
        <MDButton onClick={doTask} size="small" color="primary">
          Làm nhiệm vụ ngay
        </MDButton>
      </MDBox>
    </MDBox>
  );
};
