import React from "react";
import { FullScreen, Container, Message } from "./styles";

interface Modalprops {
  open: boolean;
  setOpen: (newValue: boolean) => void;
  title?: string;
  message?: string;
  closeOutsideClick?: boolean;
  style?: React.CSSProperties;
}

export interface FullScreenProps {
  open: boolean;
}

export const Modal: React.FC<Modalprops> = ({
  open,
  setOpen,
  title,
  children,
  message,
  closeOutsideClick = false,
  style,
  ...props
}) => {
  return (
    <FullScreen
      open={open}
      onClick={() => (closeOutsideClick ? setOpen(false) : {})}
    >
      <Container {...props} title={title}>
        {title && <h2>{title}</h2>}
        {message && <Message>{message}</Message>}
        {children}
      </Container>
    </FullScreen>
  );
};
