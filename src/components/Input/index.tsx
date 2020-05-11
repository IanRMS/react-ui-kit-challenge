import React from "react";
import { Label } from "./style";

export interface Props {
  name: string;
  value: string | number;
  setValue: (text: any) => void;
  color?: string;
  errorColor?: string;
  floatingLabel?: boolean;
  icon?: React.ReactNode | React.Component;
  iconPosition?: string;
  placeholder?: string;
  textColor?: string;
  type?: string;
  validation?: React.ReactNode;
  errorMessage?: string;
}

export interface LabelProps {
  icon?: React.ReactNode | React.Component;
  iconPosition?: string;
  textColor?: string;
  errorColor: string;
  validation?: React.ReactNode;
}

export const Input: React.FC<Props> = ({
  name,
  type = "text",
  color = "#e91e63",
  textColor = "#424242",
  value,
  setValue,
  placeholder,
  icon,
  iconPosition = "right",
  floatingLabel = false,
  errorColor = "#FF5252",
  validation = null,
  errorMessage = "",
}) => {
  return (
    <Label
      textColor={textColor}
      htmlFor={name}
      color={color}
      icon={icon}
      iconPosition={iconPosition}
      errorColor={errorColor}
    >
      <input
        name={name}
        type={type}
        aria-label={name}
        value={value}
        placeholder={placeholder}
        onChange={(e) => setValue(e.target.value)}
        color={textColor}
      />
      {icon && icon}
      {floatingLabel && <span>{name}</span>}
      {validation !== null && value !== "" && validation === false && (
        <p>{errorMessage}</p>
      )}
    </Label>
  );
};
