import React from "react";
import { storiesOf } from "@storybook/react";
import { Divider } from "../src";

storiesOf("Divider", module).add("Default", () => (
  <>
    <div
      style={{
        width: 320,
        padding: 16,
        backgroundColor: "#212121",
        borderRadius: 8,
      }}
    >
      <Divider color="#424242" />
    </div>
    <div
      style={{
        width: 320,
        padding: 16,
        marginTop: 25,
        backgroundColor: "#fafafa",
        borderRadius: 8,
      }}
    >
      <Divider color="#e0e0e0" />
    </div>
  </>
));
