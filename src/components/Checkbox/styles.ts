import styled from "styled-components";
import { ILabel, IBox, IMark } from ".";

export const Container = styled.div`
  width: 100%;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Info = styled.span`
  font-size: 15px;
  color: #fafafa;
`;

export const Label = styled.label<ILabel>`
  display: flex;
  align-items: center;
  position: relative;
  padding-left: 38px;
  height: 30px;
  margin-bottom: 10px;
  cursor: pointer;
  user-select: none;
  color: ${(props) => (props.checked ? "#fafafa" : "#9e9e9e")};
  font-size: 16px;

  &:hover:not(:read-only) span,
  input:checked ~ span {
    background-color: ${(props) => props.color};
  }
`;

export const Box = styled.input.attrs({
  type: "checkbox",
})<IBox>`
  cursor: pointer;
  position: absolute;
  opacity: 0;
  height: 0;
  width: 0;

  &:checked ~ span:after {
    display: block;
  }
`;

export const Mark = styled.span<IMark>`
  position: absolute;
  top: 0;
  left: 0;
  height: 30px;
  width: 30px;
  background-color: ${(props) => (props.checked ? props.color : "transparent")};
  border: ${(props) => (props.checked ? "none" : `2px solid ${props.color}`)};
  border-radius: 4px;
  display: flex;
  justify-content: center;
  align-items: center;

  transition: 200ms ease-in-out;
  cursor: ${(props) => (props.readonly ? "not-allowed" : "pointer")};

  &:after {
    content: "";
    position: absolute;
    display: none;

    width: 7px;
    height: 12px;

    border: solid white;
    border-width: 0 3px 3px 0;
    transform: rotate(45deg);
  }
`;
