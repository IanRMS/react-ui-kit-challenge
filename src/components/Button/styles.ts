import styled from "styled-components";
import { lighten, darken } from "polished";
import { Props } from ".";

export const Container = styled.button<Props>`
  background-color: ${(props) =>
    props.outlined ? "transparent" : props.backgroundColor};
  color: ${(props) => (props.outlined ? props.outlinedColor : props.color)};
  padding: 0px 38px;
  height: 48px;
  border-radius: 4px;
  box-shadow: ${(props) =>
    props.outlined ? "none" : `0px 0px 5px rgba(0, 0, 0, 0.4)`};
  border: ${(props) =>
    props.outlined ? `2px solid ${props.outlinedColor}` : "none"};
  outline: none;
  text-transform: uppercase;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  width: ${(props) => (props.fullSize ? `100%` : "auto")};
  font-size: 16px;
  margin: 10px 0px;

  &:hover:not(:disabled) {
    background-color: ${(props) =>
      props.outlined
        ? props.outlinedColor
        : lighten(0.13, props.backgroundColor as string)};
    color: ${(props) =>
      props.outlined
        ? lighten(1.0, props.outlinedColor as string)
        : props.color};
  }

  &:disabled {
    background-color: ${(props) =>
      props.outlined ? "none" : darken(0.18, props.backgroundColor as string)};
    cursor: not-allowed;
    border: ${(props) => (props.outlined ? `2px solid #9e9e9e` : "none")};
    color: ${(props) => (props.outlined ? "#9e9e9e" : props.color)};
  }

  &:active:not(:disabled) {
    background-color: ${(props) =>
      darken(
        0.09,
        (props.outlined ? props.outlinedColor : props.backgroundColor) as string
      )};
    border: ${(props) =>
      props.outlined
        ? `1px solid ${darken(0.09, props.outlinedColor as string)}`
        : "none"};
  }
`;

export const ButtonContainer = styled.div`
  width: 320px;
  padding: 10px 0px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
`;
