export type ButtonSeverity =
  | 'info'
  | 'success'
  | 'warn'
  | 'danger'
  | 'secondary'
  | 'contrast'
  | 'help'
  | 'primary';
export type ButtonSize = 'small' | 'large';
export type ButtonVariant = 'text' | 'outlined';
export type ButtonIconPosition = 'left' | 'right';

export interface ButtonConfig {
  type?: string;
  iconPos?: ButtonIconPosition;
  icon?: string;
  badge?: string;
  label?: string;
  disabled?: boolean;
  loading?: boolean;
  loadingIcon?: string;
  raised?: boolean;
  rounded?: boolean;
  text?: boolean;
  plain?: boolean;
  severity?: ButtonSeverity;
  outlined?: boolean;
  link?: boolean;
  tabindex?: number;
  size?: ButtonSize;
  variant?: ButtonVariant;
  style?: { [key: string]: string };
  styleClass?: string;
  badgeClass?: string;
  badgeSeverity?: ButtonSeverity;
  ariaLabel?: string;
  autofocus?: boolean;
  fluid?: boolean;
  buttonProps?: any;

  onClick: (event: Event) => void;
}
