import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Switch } from "../src";

storiesOf("Switch", module).add("Switch", () => {
  const [select, setSelect] = useState(false);

  return (
    <Switch
      name="switch"
      value={select}
      checked={select === true}
      onChange={() => setSelect(!select)}
    />
  );
});
