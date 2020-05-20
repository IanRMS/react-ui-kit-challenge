import styled from "styled-components";

interface Props {
  color?: string;
}

export const Divider = styled.hr<Props>`
  height: 1px;
  width: 100%;
  background-color: ${(props) => (props.color ? props.color : "#9e9e9e")};
  margin: 15px 0px;
  border: none;
`;
