import type TableColumn from "../../interfaces/TableColumn";
import Badge from "../ui/Badge";
import Table from "../ui/Table";

type Person = {
  name: string;
  email: string;
  role: "Admin" | "User";
  status: "Active" | "Inactive";
};

const tableColumns: TableColumn<Person>[] = [
  { id: "1", header: "Name", accessor: "name" as const },
  { id: "2", header: "Email", accessor: "email" as const },
  {
    id: "3",
    header: "Role",
    accessor: (row: Person) => (
      <Badge variant={row.role === "Admin" ? "primary" : "default"}>
        {row.role}
      </Badge>
    ),
  },
  {
    id: "4",
    header: "Status",
    accessor: (row: Person) => (
      <Badge variant={row.status === "Active" ? "success" : "default"}>
        {row.status}
      </Badge>
    ),
  },
];

const tableData: Person[] = [
  {
    name: "John Doe",
    email: "john@example.com",
    role: "Admin",
    status: "Active",
  },
  {
    name: "Jane Smith",
    email: "jane@example.com",
    role: "User",
    status: "Active",
  },
  {
    name: "Bob Johnson",
    email: "bob@example.com",
    role: "User",
    status: "Inactive",
  },
];

export default function TableContent() {
  return (
    <div className="mb-6">
      <h3 className="text-foreground mb-3 text-base font-medium sm:text-lg">
        Table
      </h3>
      <Table columns={tableColumns} data={tableData} />
    </div>
  );
}
