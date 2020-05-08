// @ts-nocheck
import React, { forwardRef } from "react";

import { Label, Radio, Mark } from "./styles";

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

export interface PropsMark {
  color?: string;
  checked?: boolean;
  readonly?: boolean;
}

const RadioWrapper = forwardRef(
  (
    { label, name, value, color = "#e91e63", checked, ...props }: Props,
    ref
  ) => {
    const { readOnly, onChange } = props;

    return (
      <Label
        onClick={readOnly ? () => {} : onChange}
        htmlFor={name}
        color={color}
        checked={checked}
      >
        {label}

        <Radio {...props} ref={ref} name={name} value={value} />
        <Mark color={color} checked={checked} readonly={readOnly} />
      </Label>
    );
  }
);

export { RadioWrapper as Radio };
