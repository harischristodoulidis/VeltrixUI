export default interface DropdownItem {
  label?: string;
  onClick?: () => void;
  disabled?: boolean;
  divider?: boolean;
  icon?: React.ReactNode;
}
