import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { CheckBox } from "../src";

storiesOf("CheckBox", module)
  .add("CheckBox Group", () => {
    const optionsList = [
      { id: 1, value: "Option One" },
      { id: 2, value: "Option Two" },
      { id: 3, value: "Option Three" },
    ];

    const [options, setOptions] = useState([optionsList[1].id]);

    function toggleOption(id: number) {
      setOptions(
        options.includes(id)
          ? options.filter((option) => option !== id)
          : [...options, id]
      );
    }

    return (
      <form>
        {optionsList.map((item) => (
          <CheckBox
            name="checkbox"
            key={item.id}
            value={item.value}
            label={item.value}
            checked={options.includes(item.id)}
            onChange={() => toggleOption(item.id)}
          />
        ))}
      </form>
    );
  })
  .add("Read Only", () => (
    <>
      <CheckBox
        name="checkbox"
        label="Unchecked"
        value="Checked"
        checked={false}
        readonly
        color="#e53935"
      />
      <CheckBox
        name="checkBox"
        label="Unchecked"
        value="Checked"
        checked={true}
        readonly
        color="#e53935"
      />
    </>
  ));
