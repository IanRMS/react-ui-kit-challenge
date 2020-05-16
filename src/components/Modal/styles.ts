import { FullScreenProps } from ".";
import styled from "styled-components";

export const FullScreen = styled.div<FullScreenProps>`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.4);
  display: ${(props) => (props.open ? "flex" : "none")};
  justify-content: center;
  align-items: center;
  z-index: 10000;
  animation: fadeIn 250ms ease-in-out;

  @keyframes fadeIn {
    from {
      background-color: rgba(0, 0, 0, 0);
    }
  }
  to {
    background-color: rgba(0, 0, 0, 0.4);
  }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px 15px 5px 15px;
  min-width: 300px;
  background-color: #fafafa;
  border-radius: 6px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.4);

  animation: slideIn 250ms cubic-bezier(0.42, 0, 0.21, 1) 1;

  @keyframes slideIn {
    from {
      transform: translateY(-140px);
      opacity: 0;
    }
    25% {
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }

  h2 {
    color: #424242;
    margin-bottom: 20px;
  }
`;

export const Message = styled.span`
  color: #757575;
  margin-bottom: 15px;
`;
