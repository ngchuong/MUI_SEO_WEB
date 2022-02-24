// import get from "lodash/get";
import TableMUI from "./Table";

export default function TaskList({ data }) {
  const rows = data.map((el, index) => {
    const objRelatedData = JSON.parse(el.related_data) || {};
    return {
      ...el,
      index: index + 1,
      key_word: objRelatedData.key_word,
      origin: objRelatedData.origin,
    };
  });
  const columns = [
    { id: "index", label: "STT", minWidth: 30 },
    { id: "type_task", label: "Loại NV", minWidth: 50 },
    { id: "name", label: "Tên NV", minWidth: 100 },
    {
      id: "description",
      label: "Mô tả",
      minWidth: 200,
      align: "left",
    },
    {
      id: "reward",
      label: "Tiền thưởng",
      minWidth: 50,
      align: "left",
    },
    {
      id: "max_turn",
      label: "Số lượt còn lại",
      minWidth: 50,
      align: "left",
    },
    {
      id: "priority",
      label: "Độ ưu tiên",
      minWidth: 50,
    },
    {
      id: "key_word",
      label: "Từ khóa",
      minWidth: 50,
      align: "left",
    },
    {
      id: "origin",
      label: "Trang web đích",
      minWidth: 100,
      align: "left",
    },
  ];

  return <TableMUI columns={columns} rows={rows} />;
}
