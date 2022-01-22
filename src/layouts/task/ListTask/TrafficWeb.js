import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDBox from "components/MDBox";

import { reqGetTask, reqPostTask } from "../../../actions/request";

function TrafficWeb() {
  const [doing, setDoing] = useState(false);
  const [inputKey, setInputKey] = useState("");
  // const test = useSelector((state) => state.data);
  console.log(inputKey);
  useEffect(() => {
    // TODO: get api to make  task
    reqGetTask();
  }, []);

  const onChangeKey = (e) => {
    setInputKey(e.target.value);
  };

  const doTaskNow = () => {
    setDoing(true);
    window.open("https://www.google.com/");
  };

  const doneTask = () => {
    // TODO: request api send key to server, receive task
    reqPostTask(inputKey);
  };

  return (
    <div>
      <div>Huong dan lam nhiem vu</div>
      <div>
        {doing ? (
          <div>
            <MDBox component="form" role="form">
              <MDInput
                type="text"
                label="Nhập key hoàn thành"
                value={inputKey}
                onChange={onChangeKey}
              />
            </MDBox>

            <MDButton onClick={doneTask} size="small" color="primary">
              Hoàn thành và nhận nhiệm vụ
            </MDButton>
          </div>
        ) : (
          <MDButton onClick={doTaskNow} size="small" color="primary">
            Làm nhiệm vụ ngay
          </MDButton>
        )}
      </div>
    </div>
  );
}

export default TrafficWeb;
