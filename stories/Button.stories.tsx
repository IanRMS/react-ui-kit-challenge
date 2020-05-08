import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../src";
import { ButtonContainer } from "../src/components/Button/styles";

storiesOf("Button", module)
  .add("Default", () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button>button</Button>
      <Button backgroundColor="#e53935">button</Button>
      <Button backgroundColor="#7b1fa2">button</Button>
    </div>
  ))
  .add("Outlined", () => (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <Button type="submit" outlined={true} outlinedColor="#e91e63">
        button
      </Button>
      <Button outlined={true} outlinedColor="#e53935">
        button
      </Button>
      <Button outlined={true} outlinedColor="#ab47bc">
        button
      </Button>
    </div>
  ))
  .add("Disabled", () => <Button disabled={true}>button</Button>)
  .add("Outline Disabled", () => (
    <Button outlined={true} disabled={true}>
      button
    </Button>
  ))
  .add("FullSize", () => (
    <ButtonContainer style={{ display: "flex", flexDirection: "column" }}>
      <Button type="submit" fullSize={true}>
        button
      </Button>
      <Button fullSize={true} backgroundColor="#e53935">
        button
      </Button>
      <Button fullSize={true} backgroundColor="#7b1fa2">
        button
      </Button>
    </ButtonContainer>
  ))
  .add("Loading", () => (
    <ButtonContainer style={{ display: "flex", flexDirection: "column" }}>
      <Button type="submit" fullSize={true} onLoading={true}>
        button
      </Button>
      <Button fullSize={true} onLoading={true} backgroundColor="#e53935">
        button
      </Button>
      <Button fullSize={true} onLoading={true} backgroundColor="#7b1fa2">
        button
      </Button>
    </ButtonContainer>
  ));
