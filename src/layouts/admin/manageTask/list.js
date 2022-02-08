import TableMUI from "./Table";

export default function TaskList({ data }) {
  const rows = data.map((el, index) => ({ ...el, index: index + 1 }));
  const columns = [
    { id: "index", label: "STT", minWidth: 50 },
    { id: "type_task", label: "Loại NV", minWidth: 70 },
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
      id: "related_data",
      label: "Dữ liệu liên quan",
      minWidth: 200,
      align: "left",
    },
  ];

  return <TableMUI columns={columns} rows={rows} />;
}
