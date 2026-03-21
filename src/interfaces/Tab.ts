export default interface Tab {
  label: string;
  value: string;
  content: React.ReactNode;
  disabled?: boolean;
}
