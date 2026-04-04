export default interface TableColumn<T> {
  id: string;
  header: string;
  accessor: keyof T | ((row: T) => React.ReactNode);
  width?: string;
}
