export interface MenuItem {
  id: string | number;
  label: string;
  onClick: () => void;
  isVisible: boolean;
}
