import TableMUI from "./Table";

export default function UserList({ data }) {
  const rows = data.map((el, index) => {
    const relatedData = el.related_data ? JSON.parse(el.related_data) : {};
    return {
      ...el,
      index: index + 1,
      bank_number: relatedData.bank_number,
      bank_name: relatedData.bank_name,
      // img_social_id: relatedData.image,
      is_admin: el.is_admin ? "Admin" : "User",
    };
  });

  const columns = [
    { id: "index", label: "STT", minWidth: 30 },
    { id: "name", label: "Tên", minWidth: 150 },
    { id: "email", label: "Email", minWidth: 70 },
    { id: "is_admin", label: "Quyền", minWidth: 70 },
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
      label: "Số dư",
      minWidth: 50,
      align: "left",
    },
    {
      id: "user_social_id",
      label: "Số cmnd",
      minWidth: 70,
      align: "left",
    },
    {
      id: "bank_number",
      label: "Stk ngân hàng",
      minWidth: 100,
      align: "left",
    },
    {
      id: "bank_name",
      label: "Tên ngân hàng",
      minWidth: 100,
      align: "left",
    },
  ];

  return <TableMUI columns={columns} rows={rows} />;
}
