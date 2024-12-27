import React from "react";
import styles from "./RangeInput.module.css";

interface RangeInputProps {
  placeHolder: string;
  value: number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onBlur: () => void;
}

const RangeInput = ({
  placeHolder,
  value,
  onChange,
  onBlur,
}: RangeInputProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.line}>|</p>
      <input
        className={styles.input}
        type="number"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
        onBlur={onBlur}
      />
    </div>
  );
};

export default RangeInput;
