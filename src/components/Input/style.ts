import styled from "styled-components";
import { LabelProps } from ".";

export const Label = styled.label<LabelProps>`
  display: flex;
  flex-direction: row;
  width: 100%;
  background: none;
  margin: 55px 0px;
  border: none;
  position: relative;

  > span {
    font-size: 15px;
    position: absolute;
    top: -22px;
    color: #9e9e9e;
    transition: 180ms ease-in-out;
  }

  > p {
    margin: 0px;
    font-size: 15px;
    position: absolute;
    bottom: -20px;
    font-family: "Roboto";
    color: ${(props) => props.errorColor};
    left: 0px;
  }

  > input {
    width: 100%;
    border-radius: 6px;
    background: none;
    border: solid 1.5px #9e9e9e;
    padding: 16px;
    padding-left: ${(props) =>
      props.icon && props.iconPosition === "left" ? "46px" : "16px"};
    color: ${(props) => props.textColor};
    font-size: 16px;
    transition: 180ms ease-in-out;

    &::placeholder {
      color: #9e9e9e;
    }

    ~ svg {
      fill: #9e9e9e;
      position: absolute;
      width: 20px;
      height: 20px;
      left: ${(props) => (props.iconPosition === "left" ? "16px" : null)};
      top: 17px;
      right: ${(props) => (props.iconPosition === "right" ? "16px" : null)};
      transition: 180ms ease-in-out;
    }

    &:focus {
      border-color: ${(props) => props.color};

      ~ svg {
        fill: ${(props) => props.color};
      }

      ~ span {
        color: ${(props) => props.color};
      }

      ~ p {
        display: none;
      }
    }
  }
`;

export const ErrorMessage = styled.p``;
