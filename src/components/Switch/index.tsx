// @ts-nocheck
import React, { forwardRef } from "react";

import {
  CheckBoxWrapper,
  CheckBoxLabel,
  CheckBox,
  Container,
  Info,
} from "./styles";

export const SwitchContainer: React.FC = ({ children }) => {
  return <Container>{children}</Container>;
};

export interface InfoProps {
  color?: string;
}

export const SwitchInfo: React.FC<InfoProps> = ({
  children,
  color = "#424242",
}) => {
  return <Info color={color}>{children}</Info>;
};

export interface BoxProps {
  name: string;
  value: string;
  color?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  disabled?: boolean;
  onChange?: () => void;
}

export const Switch = forwardRef(
  (
    {
      name,
      value,
      color = "#e91e63",
      checked,
      disabled = false,
      ...props
    }: Props,
    ref
  ) => {
    const { onChange } = props;
    return (
      <CheckBoxWrapper>
        <CheckBox
          name={name}
          ref={ref}
          value={value}
          checked={checked}
          type="checkbox"
          onChange={disabled ? () => {} : onChange}
          color={disabled ? "#e0e0e0" : color}
          disabled={disabled}
        />
        <CheckBoxLabel htmlFor={name} />
      </CheckBoxWrapper>
    );
  }
);
