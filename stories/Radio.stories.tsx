import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Radio } from "../src";

storiesOf("Radio Button", module)
  .add("Radio Group", () => {
    const options = [
      { id: 1, value: "Option One" },
      { id: 2, value: "Option Two" },
    ];

    const [option, setOption] = useState(options[1].id);

    return (
      <form>
        {options.map((item) => (
          <Radio
            name="radio"
            key={item.id}
            label={item.value}
            value={item.value}
            checked={option === item.id}
            onChange={() => setOption(Number(item.id))}
          />
        ))}
      </form>
    );
  })
  .add("Disabled", () => (
    <form>
      <Radio
        label="Checked Read Only"
        value="checked"
        name="radio"
        checked={true}
        readOnly
      />
      <Radio
        label="Unchecked Read Only"
        value="unchecked"
        name="radio"
        checked={false}
        readOnly
      />
    </form>
  ));
