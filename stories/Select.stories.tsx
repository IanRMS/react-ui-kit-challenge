import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { SelectDropdown } from "../src";

storiesOf("Select", module)
  .add("Default", () => {
    const [value, setValue] = useState({ label: "Selecione...", value: 0 });
    const options = [
      { label: "Selecione", value: 0 },
      { label: "Albania", value: 355 },
      { label: "Argentina", value: 54 },
      { label: "Austria", value: 43 },
      { label: "Cocos Islands", value: 61 },
      { label: "Kuwait", value: 965 },
      { label: "Sweden", value: 46 },
      { label: "Venezuela", value: 58 },
    ];

    function selectCity(item: any) {
      setValue(item);
    }
    return (
      <div style={{ width: 380 }}>
        <SelectDropdown
          name="Country"
          value={value.label}
          options={options}
          onChange={selectCity}
        />
      </div>
    );
  })
  .add("Floating Label", () => {
    const [state, setState] = useState({
      label: "Selecione o estado",
      value: "",
    });
    const states: any = [
      // { label: "Bahia", value: "BA" },
      // { label: "Minas Gerais", value: "MG" },
      // { label: "Rio Grande do Sul", value: "RS" },
      // { label: "Paraná", value: "PR" },
      // { label: "São Paulo", value: "SP" },
    ];

    function selectState(item: any) {
      setState(item);
    }
    return (
      <div style={{ width: 380 }}>
        <SelectDropdown
          borderColor="#e53935"
          name="State"
          value={state.label}
          floatingLabel={true}
          options={states}
          onChange={selectState}
          placeholder="Select a state"
        />
        <SelectDropdown
          borderColor="#ab47bc"
          name="State"
          value={state.label}
          floatingLabel={true}
          options={states}
          onChange={selectState}
          placeholder="Select a state"
        />
        <SelectDropdown
          borderColor="#2196f3"
          name="State"
          value={state.label}
          floatingLabel={true}
          options={states}
          onChange={selectState}
          placeholder="Select a state"
        />
      </div>
    );
  });
