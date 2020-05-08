import React, { forwardRef } from "react";
import { Label, Box, Mark } from "./styles";

export interface Props {
  label: string;
  name: string;
  value: any;
  color?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  readOnly?: boolean;
  onChange?: () => void;
}

export interface ILabel {
  color?: string;
  checked?: boolean;
}

export interface IBox {
  ref: any;
}

export interface IMark {
  checked?: boolean;
  color?: string;
  readonly?: boolean;
}

export const CheckBox = forwardRef(
  ({ label, name, value, color = "#e91e63", ...props }: Props, ref) => {
    const { readOnly, onChange, checked } = props;
    return (
      <Label
        onClick={readOnly ? () => {} : onChange}
        htmlFor={name}
        color={color}
        checked={checked}
      >
        {label}

        <Box {...props} ref={ref} name={name} value={value} />

        <Mark checked={checked} color={color} />
      </Label>
    );
  }
);
