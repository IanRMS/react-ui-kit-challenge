import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Switch, SwitchContainer, SwitchInfo } from "../src";

storiesOf("Switch", module).add("Switch", () => {
  const [select1, setSelect1] = useState(false);
  const [select2, setSelect2] = useState(true);
  const [select3, setSelect3] = useState(true);
  const [select4, setSelect4] = useState(false);
  return (
    <>
      <div style={{ width: 250, backgroundColor: "#fafafa" }}>
        <SwitchContainer>
          <Switch
            name="switch1"
            value={select1}
            checked={select1}
            onChange={() => setSelect1(!select1)}
          />
          <SwitchInfo>{select1 ? "Turned On" : "Turned Off"}</SwitchInfo>
        </SwitchContainer>
      </div>
      <div style={{ width: 250, backgroundColor: "#fafafa" }}>
        <SwitchContainer>
          <Switch
            name="switch2"
            value={select2}
            checked={select2}
            onChange={() => setSelect2(!select2)}
            color={"#e53935"}
          />
          <SwitchInfo>{select2 ? "Turned On" : "Turned Off"}</SwitchInfo>
        </SwitchContainer>
      </div>
      <div style={{ width: 250, backgroundColor: "#fafafa" }}>
        <SwitchContainer>
          <Switch
            name="switch2"
            value={select3}
            checked={select3}
            onChange={() => setSelect3(!select3)}
            color={"#7b1fa2"}
          />
          <SwitchInfo>{select3 ? "Turned On" : "Turned Off"}</SwitchInfo>
        </SwitchContainer>
      </div>
      <div style={{ width: 250, backgroundColor: "#fafafa" }}>
        <SwitchContainer>
          <Switch
            name="switch2"
            value={select4}
            checked={select4}
            onChange={() => setSelect4(!select4)}
            color={"#7b1fa2"}
            disabled={true}
          />
          <SwitchInfo>{select4 ? "Turned On" : "Turned Off"}</SwitchInfo>
        </SwitchContainer>
      </div>
    </>
  );
});
