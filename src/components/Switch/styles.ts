import styled from "styled-components";
import { BoxProps } from ".";

export const CheckBoxWrapper = styled.div`
  position: relative;
  height: 30px;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  left: 0px;
  top: 0px;
  width: 65px;
  height: 30px;
  border-radius: 15px;
  background: #9e9e9e;
  cursor: pointer;
  &::after {
    content: "";
    display: block;
    position: absolute;
    border-radius: 50%;
    width: 22px;
    height: 22px;
    top: 4px;
    left: 4px;
    background: #fafafa;
    transition: 180ms;
  }
`;
export const CheckBox = styled.input.attrs({
  type: "checkbox",
})<BoxProps>`
  opacity: 0;
  z-index: 1;
  border-radius: 15px;
  width: 65px;
  height: 30px;
  position: relative;
  cursor: ${(props) => (!props.disabled ? "pointer" : "not-allowed")};

  &:checked + ${CheckBoxLabel} {
    background: ${(props) => props.color};
    &::after {
      content: "";
      display: block;
      position: absolute;
      border-radius: 50%;
      width: 22px;
      height: 22px;
      left: 38px;
      top: 4px;
    }
  }
`;

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: relative;
  padding: 12px;
`;

export const Info = styled.span`
  font-family: "Roboto";
  font-size: 15px;
`;
