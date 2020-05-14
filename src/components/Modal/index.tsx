import React from "react";
import { FullScreen, Container } from "./styles";

interface Modalprops {
  open: boolean;
  setOpen: (newValue: boolean) => void;
  title: string;
  message?: string;
  type?: string;
  closeOutsideClick?: boolean;
  icon?: React.ReactNode | React.Component;
}

export interface FullScreenProps {
  open: boolean;
}

export const Modal: React.FC<Modalprops> = ({
  open,
  setOpen,
  title = "Modal Title",
  children,
  message = "",
  type = "default",
  closeOutsideClick = false,
  icon,
  ...props
}) => {
  return (
    <FullScreen
      open={open}
      onClick={() => (closeOutsideClick ? setOpen(false) : {})}
    >
      <Container {...props} title={title}>
        {icon && icon}
        <h2 style={{ marginTop: icon ? 10 : 0 }}>{title}</h2>
        {message && message}
        {children}
      </Container>
    </FullScreen>
  );
};
