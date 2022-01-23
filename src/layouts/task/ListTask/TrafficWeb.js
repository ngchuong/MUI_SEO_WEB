import { useState, useEffect } from "react";
// import { useSelector } from "react-redux";
import MDButton from "components/MDButton";
import MDInput from "components/MDInput";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";

import { reqGetTask, reqPostTask } from "../../../actions/task";

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
      <div>
        <MDTypography variant="h5">Hướng dẫn làm nhiệm vụ</MDTypography>
        <div>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has
          been the industrys standard dummy text ever since the 1500s, when an unknown printer took
          a galley of type and scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting, remaining essentially
          unchanged. It was popularised in the 1960s with the release of Letraset sheets containing
          Lorem Ipsum passages, and more recently with desktop publishing software like Aldus
          PageMaker including versions of Lorem Ipsum.
        </div>
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
