export default interface NavItem {
  id: string;
  label: string;
  active?: boolean;
  href?: string;
  children?: NavItem[];
  onClick?: () => void;
}
