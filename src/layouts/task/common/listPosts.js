import MDTypography from "components/MDTypography";
import MDBox from "components/MDBox";
import MDButton from "components/MDButton";

const coppyToClipBoard = (id) => {
  if (document.selection) {
    const range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(id));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    const range = document.createRange();
    range.selectNode(document.getElementById(id));
    window.getSelection().addRange(range);
    document.execCommand("copy");
  }
};

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
            <MDButton size="small" onClick={() => coppyToClipBoard(id)}>
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
