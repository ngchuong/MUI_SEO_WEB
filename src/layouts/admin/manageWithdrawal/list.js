import TableMUI from "./Table";

export default function UserList({ data }) {
  const DefineStatus = {
    0: "Chưa thanh toán",
    1: "Đã thanh toán",
  };
  const rows = data.map((el, index) => ({
    ...el,
    index: index + 1,
    status: DefineStatus[el.status],
  }));
  const columns = [
    { id: "index", label: "STT", minWidth: 50 },
    { id: "user_id", label: "User ID", minWidth: 100 },
    { id: "status", label: "Trạng thái", minWidth: 100 },
    { id: "amount", label: "Số tiền rút", minWidth: 70 },
  ];

  return <TableMUI columns={columns} rows={rows} />;
}
