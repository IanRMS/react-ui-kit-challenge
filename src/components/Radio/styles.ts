import styled from "styled-components";
import { Props, PropsMark } from ".";

export const Label = styled.label<Props>`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 38px;
  height: 30px;
  margin: 12px 0px;
  cursor: pointer;
  user-select: none;
  color: ${(props) => (props.checked ? "#fafafa" : "#9e9e9e")};
  font-size: 16px;
`;

export const Radio = styled.input.attrs({
  type: "radio",
})`
  cursor: pointer;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;
  &:checked ~ span:after {
    display: block;
  }
`;
export const Mark = styled.span<PropsMark>`
  position: absolute;
  top: 0;
  left: 0;
  height: 28px;
  width: 28px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-style: solid;
  border-width: 2px;
  border-color: ${(props) => (props.readonly ? "#9e9e9e" : props.color)};
  border-radius: 50%;
  transition: 180ms ease-in-out;
  &:after {
    content: "";
    position: relative;
    width: 16px;
    height: 16px;
    border-radius: 20px;
    background-color: ${(props) =>
      props.checked
        ? props.readonly
          ? "#9e9e9e"
          : props.color
        : "transparent"};
  }
`;
