import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Textarea } from "../src";

storiesOf("Textarea", module)
  .add("Default", () => {
    const [value, setValue] = useState("");
    return (
      <div style={{ width: 320 }}>
        <Textarea
          name="Textarea"
          value={value}
          setValue={setValue}
          color="#e91e63"
          textColor="#fafafa"
          placeholder="Type whatever you want"
        />
      </div>
    );
  })
  .add("Floating Label", () => {
    const [value, setValue] = useState("");
    return (
      <div style={{ width: 320 }}>
        <Textarea
          name="Textarea"
          value={value}
          setValue={setValue}
          color="#e91e63"
          textColor="#fafafa"
          floatingLabel={true}
          placeholder="Type whater you want"
        />
      </div>
    );
  });
