import TableMUI from "./Table";

export default function UserList({ data }) {
  const rows = data.map((el, index) => ({ ...el, index: index + 1 }));
  const columns = [
    { id: "index", label: "STT", minWidth: 50 },
    { id: "name", label: "Tên", minWidth: 100 },
    { id: "email", label: "Email", minWidth: 70 },
    {
      id: "telephone",
      label: "SĐT",
      minWidth: 100,
      align: "left",
    },
    {
      id: "address",
      label: "Địa chỉ",
      minWidth: 150,
      align: "left",
    },
    {
      id: "balance",
      label: "Số tiền kiếm được",
      minWidth: 50,
      align: "left",
    },
  ];

  return <TableMUI columns={columns} rows={rows} />;
}
