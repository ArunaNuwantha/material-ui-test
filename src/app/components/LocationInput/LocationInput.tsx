"use client";
import React from "react";
import styles from "./LocationInput.module.css";

interface LocationInputProps {
  placeHolder: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const LocationInput = ({
  placeHolder,
  value,
  onChange,
}: LocationInputProps) => {
  return (
    <div className={styles.container}>
      <p className={styles.line}>1</p>
      <input
        className={styles.input}
        type="text"
        placeholder={placeHolder}
        value={value}
        onChange={onChange}
      />
      <p className={styles.tail}>+</p>
    </div>
  );
};

export default LocationInput;
