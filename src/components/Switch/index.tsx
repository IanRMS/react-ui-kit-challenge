// @ts-nocheck
import React, { forwardRef } from "react";

import { CheckBoxWrapper, CheckBoxLabel, CheckBox } from "./styles";

export interface BoxProps {
  name: string;
  value: string;
  color?: string;
  defaultChecked?: boolean;
  checked?: boolean;
  readonly?: boolean;
  onChange?: () => void;
}

export const Switch = forwardRef(
  ({ name, value, color = "#e91e63", checked, ...props }: Props, ref) => {
    const { readonly, onChange } = props;
    return (
      <CheckBoxWrapper>
        <CheckBox
          ref={ref}
          value={value}
          checked={checked}
          type="checkbox"
          onChange={readonly ? () => {} : onChange}
        />
        <CheckBoxLabel htmlFor={name} />
      </CheckBoxWrapper>
    );
  }
);
