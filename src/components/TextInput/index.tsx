import React, { FC, ChangeEvent } from "react";
import "./index.scss";

interface TextInputProps {
  type: string;
  placeholder: string;
  value: string;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

const TextInput: FC<TextInputProps> = ({
  type,
  placeholder,
  value,
  onChange,
}) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      defaultValue={value}
      onChange={onChange}
      className="form-input"
    />
  );
};

export default TextInput;
