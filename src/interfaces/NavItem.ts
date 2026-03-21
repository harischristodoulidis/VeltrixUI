export default interface NavItem {
  label: string;
  active?: boolean;
  href?: string;
  children?: NavItem[];
  onClick?: () => void;
}
