// @ts-nocheck
import React, { useState, forwardRef } from "react";
import { FaCaretDown } from "react-icons/fa";
import { Container, Options, NoOption } from "./styles";

export interface ContainerProps {
  borderColor: string;
  focus: boolean;
  name: string;
  loading?: boolean;
}

export interface OptionsProps {
  focus: boolean;
  onChange: (object: any) => void;
  backgroundColor?: string;
}

export interface SelectProps {
  options: Array<any>;
  borderColor?: string;
  floatingLabel?: boolean;
  placeholder?: string;
  name: string;
  value?: any;
  onChange: (object: object) => void;
  loading?: boolean;
  backgroundColor?: string;
}

export interface NoOptionProps {
  focus: boolean;
  backgroundColor?: string;
}

export const SelectDropdown = forwardRef(
  (
    {
      name,
      options,
      value = { label: "Selecione...", value: 0 },
      borderColor = "#e91e63",
      floatingLabel = false,
      placeholder,
      onChange,
      loading,
      backgroundColor = "#212121",
    }: SelectProps,
    ref
  ) => {
    const [focus, setFocus] = useState(false);
    const [selected, select] = useState(null);

    return (
      <div style={{ width: "100%", position: "relative" }}>
        <Container
          name={name}
          borderColor={focus ? borderColor : "#9e9e9e"}
          focus={focus}
          onClick={() => setFocus(!focus)}
          value={value}
          ref={ref}
          placeholder={placeholder}
        >
          {floatingLabel && <p>{name}</p>}
          <span>{selected?.label || placeholder || "Selecione..."}</span>
          <FaCaretDown />
        </Container>
        {options.length ? (
          <Options backgroundColor={backgroundColor} focus={focus}>
            {options.map((item, i) => (
              <div
                key={i}
                onClick={() => {
                  setFocus(!focus);
                  onChange(item);
                  select(item);
                }}
              >
                <span>{item.label}</span>
              </div>
            ))}
          </Options>
        ) : (
          <NoOption backgroundColor={backgroundColor} focus={focus}>
            <div
              style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                padding: 12,
                alignItems: "center",
              }}
            >
              <span>
                {loading ? "Loading options..." : "No options available"}
              </span>
            </div>
          </NoOption>
        )}
      </div>
    );
  }
);
