import styled from "styled-components";

export const CheckBoxWrapper = styled.div`
  position: relative;
`;
export const CheckBoxLabel = styled.label`
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 30px;
  border-radius: 15px;
  background: #bebebe;
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
    background: #ffffff;
    transition: 0.3s all ease-in-out;
  }
`;
export const CheckBox = styled.input`
  opacity: 0;
  border-radius: 50%;
  width: 80px;
  height: 30px;
  &:checked + ${CheckBoxLabel} {
    background: #4fbe79;
    &::after {
      content: "";
      display: block;
      border-radius: 50%;
      width: 18px;
      height: 18px;
      right: 4px;
      transition: 0.2s;
    }
  }
`;
