import React from "react";
import { storiesOf } from "@storybook/react";
import { Button } from "../src";
import { ButtonContainer } from "../src/components/Button/styles";

storiesOf("Button", module)
  .add("Default", () => <Button>button</Button>)
  .add("Outlined", () => (
    <Button outlined={true} outlinedColor="#e91e63">
      button
    </Button>
  ))
  .add("Disabled", () => <Button disabled={true}>button</Button>)
  .add("Outline Disabled", () => (
    <Button outlined={true} disabled={true}>
      button
    </Button>
  ))
  .add("FullSize", () => (
    <ButtonContainer>
      <Button fullSize={true}>button</Button>);
    </ButtonContainer>
  ))
  .add("Loading", () => (
    <ButtonContainer>
      <Button fullSize={true} onLoading={true}>
        button
      </Button>
    </ButtonContainer>
  ));
