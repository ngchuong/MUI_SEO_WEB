import { useState } from "react";
import { useSelector } from "react-redux";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import { reqPostTask } from "../../../actions/task";

function TrafficWeb() {
  const [inputKey, setInputKey] = useState("");
  const currentTask = useSelector((state) => state.task.currentTask);

  const onChangeKey = (e) => {
    setInputKey(e.target.value);
  };

  const doneTask = () => {
    // TODO: request api send key to server, receive task
    reqPostTask(inputKey);
  };

  return (
    <div>
      <div>
        <MDTypography variant="h5">Làm nhiệm vụ</MDTypography>
        <div>Tên nhiệm vụ: {currentTask && currentTask.name}</div>
        <div>Mô tả: {currentTask && currentTask.description}</div>
        <div>Tiền thưởng: {currentTask && currentTask.reward}</div>
        <div>
          <div>
            <MDBox
              component="img"
              src="https://thumbs.dreamstime.com/b/environment-earth-day-hands-trees-growing-seedlings-bokeh-green-background-female-hand-holding-tree-nature-field-gra-130247647.jpg"
              alt="#"
              borderRadius="lg"
              shadow="md"
              width="100%"
              height="100%"
              position="relative"
              zIndex={1}
            />
          </div>
        </div>
      </div>
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
    </div>
  );
}

export default TrafficWeb;
