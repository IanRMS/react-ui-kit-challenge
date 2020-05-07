import React from "react";
import Spinner from "react-spinner-material";
import { Container, Row } from "./styles";

export interface Props {
  color?: string;
  backgroundColor?: string;
  outlinedColor?: string;
  loadingLabel?: string;
  outlined?: boolean;
  disabled?: boolean;
  onLoading?: boolean;
  fullSize?: boolean;
}

export const Button: React.FC<Props> = ({
  children,
  backgroundColor = "#E91E63",
  outlinedColor = "#e91e63",
  color = "#fafafa",
  outlined = false,
  disabled = false,
  onLoading = false,
  fullSize = false,
  loadingLabel = "Loading...",
}) => {
  return (
    <Container
      backgroundColor={backgroundColor}
      color={color}
      outlined={outlined}
      disabled={disabled || onLoading}
      outlinedColor={outlinedColor}
      fullSize={fullSize}
      loadingLabel={loadingLabel}
      onLoading={false}
    >
      {!onLoading ? (
        children
      ) : (
        <Row>
          <div style={{ marginRight: 12 }}>
            <Spinner
              size={32}
              spinnerColor={color}
              spinnerWidth={32}
              visible={true}
              color={color}
              radius={32}
              stroke={4}
            />
          </div>
          {loadingLabel}
        </Row>
      )}
    </Container>
  );
};
