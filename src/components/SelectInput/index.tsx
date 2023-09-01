import React, { FC, ChangeEvent } from "react";
import "./index.scss";

interface Option {
  value: string;
  label: string;
}

interface SelectInputProps {
  options: Option[];
  value: string;
  onChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

const SelectInput: FC<SelectInputProps> = ({ options, value, onChange }) => {
  return (
    <select value={value} onChange={onChange} className="form-select">
      {options.map((option) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  );
};

export default SelectInput;
