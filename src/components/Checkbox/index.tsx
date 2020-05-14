import React, { forwardRef } from "react";
import { Label, Box, Mark, Container, Info } from "./styles";

export interface Props {
  name: string;
  value: any;
  color?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  readonly?: boolean;
  label?: string;
  onChange?: () => void;
}

export const CheckBoxContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export const CheckBoxInfo: React.FC = ({ children }) => {
  return <Info>{children}</Info>;
};

export interface ILabel {
  color?: string;
  checked?: boolean;
}

export interface IBox {
  ref: any;
  readonly?: boolean;
}

export interface IMark {
  checked?: boolean;
  color?: string;
  readonly?: boolean;
}

export const CheckBox = forwardRef(
  (
    { name, label, value, color = "#e91e63", readonly, ...props }: Props,
    ref
  ) => {
    const { onChange, checked } = props;
    return (
      <Label
        onClick={readonly ? () => {} : onChange}
        htmlFor={name}
        color={color}
        checked={checked}
      >
        <Box
          {...props}
          readonly={readonly}
          ref={ref}
          name={name}
          value={value}
        />

        {label && label}

        <Mark readonly={readonly} checked={checked} color={color} />
      </Label>
    );
  }
);
