import styled from "styled-components";
import { Props } from ".";

export const TextArea = styled.textarea<Props>`
  width: 100%;
  padding: 16px;
  background: none;
  border-radius: 6px;
  border: 1.5px solid #9e9e9e;
  resize: none;
  min-height: 160px;
  color: ${(props) => props.textColor};
  font-size: 15px;

  ~ span {
    color: #9e9e9e;
  }

  &:focus {
    border-color: ${(props) => props.color};
    ~ span {
      color: ${(props) => props.color};
    }
  }
`;

export const Container = styled.div`
  position: relative;
  width: 100%;
  > span {
    position: absolute;
    top: -22px;
    font-size: 15px;
    left: 0px;
    color: ${(props) => props.color};
  }
`;
