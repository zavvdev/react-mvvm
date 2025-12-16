import cx from "clsx";
import type { PropsWithChildren } from "react";
import styles from "@/ui/components/atoms/button/button.atom.module.css";

interface Props extends PropsWithChildren {
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
  fullWidth?: boolean;
}

export function ButtonAtom({
  children,
  className,
  onClick,
  disabled,
  fullWidth,
}: Props) {
  const rootClasses = cx(
    styles.root,
    {
      [styles.disabled]: disabled,
      [styles.rootFullWidth]: fullWidth,
    },
    className,
  );

  return (
    <button
      type="button"
      disabled={disabled}
      className={rootClasses}
      onClick={onClick}
    >
      {children}
    </button>
  );
}
