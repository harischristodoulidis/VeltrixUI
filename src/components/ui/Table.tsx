import type TableColumn from "../../interfaces/TableColumn";

export interface TableProps<T> {
  columns: TableColumn<T>[];
  data: T[];
  hover?: boolean;
}

export default function Table<T>({
  columns,
  data,
  hover = true,
}: TableProps<T>) {
  const getCellValue = (row: T, column: TableColumn<T>) => {
    if (typeof column.accessor === "function") {
      return column.accessor(row);
    }
    return row[column.accessor] as React.ReactNode;
  };

  return (
    <div className="border-border w-full overflow-x-auto rounded-lg border">
      <table className="w-full min-w-150">
        <thead className="bg-muted">
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                className="text-foreground px-3 py-2 text-left text-xs font-medium sm:px-4 sm:py-3 sm:text-sm"
                style={column.width ? { width: column.width } : undefined}
              >
                {column.header}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-border divide-y">
          {data.map((row) => (
            <tr
              key={Math.random()}
              className={hover ? "hover:bg-accent transition-colors" : ""}
            >
              {columns.map((column) => (
                <td
                  key={column.id}
                  className="text-foreground px-3 py-2 text-xs sm:px-4 sm:py-3 sm:text-sm"
                >
                  {getCellValue(row, column)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
