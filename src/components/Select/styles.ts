import styled from "styled-components";
import { ContainerProps, OptionsProps, NoOptionProps } from ".";

export const Container = styled.div<ContainerProps>`
  width: calc(100% - 3px);
  height: 50px;
  border: ${(props) => `1.5px solid ${props.borderColor}`};
  border-radius: 6px;
  outline: none;
  background: none;
  color: #9e9e9e;
  position: relative;
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: 180ms ease-in-out;
  user-select: none;
  margin-bottom: 30px;

  > p {
    margin: 0;
    font-size: 15px;
    color: ${(props) => props.borderColor};
    position: absolute;
    top: -22px;
    left: 0;
  }

  > span {
    font-size: 16px;
    color: ${(props) => props.borderColor};
    position: absolute;
    left: 12px;
  }

  > svg {
    position: absolute;
    top: 15px;
    right: 12px;
    width: 20px;
    height: 20px;
    fill: ${(props) => props.borderColor};
    transform: ${(props) => (props.focus ? "rotate(180deg)" : null)};
    transition: all 180ms ease-in-out;
  }
`;

export const NoOption = styled.div<NoOptionProps>`
  width: 100%;
  position: absolute;
  top: 60px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  background-color: ${(props) => props.backgroundColor};
  transition: all 180ms ease-in-out;
  max-height: ${(props) => (props.focus ? 48 : 0)}px;
  user-select: none;
  z-index: 2;
  overflow: hidden;

  > div {
    > span {
      font-size: 15px;
      color: #fafafa;
    }
  }
`;

export const Options = styled.div<OptionsProps>`
  width: 100%;
  position: absolute;
  top: 60px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  background-color: ${(props) => props.backgroundColor};
  transition: all 180ms ease-in-out;
  max-height: ${(props) => (props.focus ? 200 : 0)}px;
  overflow-y: scroll;
  user-select: none;
  z-index: 2;

  &::-webkit-scrollbar {
    width: 8px;
  }

  /* Track */
  &::-webkit-scrollbar-track {
    background: rgba(0, 0, 0, 0);
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.1);
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #555;
  }

  > div {
    width: calc(100% - 16px);
    padding: 0px 8px;
    cursor: pointer;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:hover {
      background-color: rgba(20, 20, 20, 0.4);
    }

    > span {
      font-size: 15px;
      color: #fafafa;
    }
  }
`;
