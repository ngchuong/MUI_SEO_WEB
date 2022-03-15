import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const copyToClipBoard = (text) => navigator.clipboard.writeText(text);

export const ListPost = ({ data }) => {
  const content =
    data &&
    Array.isArray(data) &&
    data.map((el, index) => {
      const id = `post_${index}`;
      return (
        <MDBox key={el} display="flex" justifyContent="space-between" m={1}>
          <MDBox
            id={id}
            sx={{ whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}
          >
            {el}
          </MDBox>
          <MDBox>
            <MDButton size="small" onClick={() => copyToClipBoard(el)}>
              Coppy
            </MDButton>
          </MDBox>
        </MDBox>
      );
    });

  return (
    <MDBox>
      <MDTypography fontWeight="medium" color="dark" variant="xx">
        Danh sách bài viết:
      </MDTypography>
      {content}
    </MDBox>
  );
};
