import cx from "clsx";
import styles from "@/ui/components/atoms/input/input.atom.module.css";

interface Props {
  type: string;
  name?: string;
  placeholder?: string;
  className?: string;
  errorText?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  value?: string;
}

export function InputAtom({
  type,
  name,
  placeholder,
  className,
  errorText,
  onChange,
  onBlur,
  value,
}: Props) {
  const inputClasses = cx(
    styles.input,
    {
      [styles.inputError]: Boolean(errorText),
    },
    className,
  );

  return (
    <div>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        className={inputClasses}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {Boolean(errorText) && <div className={styles.error}>{errorText}</div>}
    </div>
  );
}
