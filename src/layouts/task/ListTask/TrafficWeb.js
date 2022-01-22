import { useSelector } from "react-redux";
import MDButton from "components/MDButton";

const doTaskNow = () => {
  window.open("https://www.google.com/");
};

// TODO: get api to make  task
// request api to do task

function TrafficWeb() {
  const test = useSelector((state) => state.data);
  console.log("test", test);
  return (
    <div>
      <div>Huong dan lam nhiem vu</div>
      <div>
        <MDButton
          // component={Link}
          // to="https://www.google.com/"
          onClick={doTaskNow}
          // variant="outlined"
          size="small"
          color="primary"
        >
          Làm nhiệm vụ ngay
        </MDButton>
      </div>
    </div>
  );
}

export default TrafficWeb;
