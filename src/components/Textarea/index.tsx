// @ts-nocheck
import React from "react";
import { TextArea, Container } from "./styles";
export interface Props {
  name: string;
  value: any;
  setValue: (text: any) => void;
  color?: string;
  errorColor?: string;
  floatingLabel?: boolean;
  placeholder?: string;
  validation?: React.ReactNode;
  errorMessage?: string;
  maxlength?: number;
  minlength?: number;
  textColor?: string;
}

export const Textarea: React.FC<Props> = ({
  name,
  value,
  setValue,
  placeholder,
  color = "#e91e63",
  errorColor = "#ff5252",
  floatingLabel = false,
  validation = null,
  maxlength = 500,
  minlength = 5,
  textColor = "#424242",
}) => {
  return (
    <Container>
      <TextArea
        name={name}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        color={color}
        errorColor={errorColor}
        floatingLabel={floatingLabel}
        validation={validation}
        maxlength={maxlength}
        minLength={minlength}
        textColor={textColor}
      />
      {floatingLabel && <span>{name}</span>}
    </Container>
  );
};
