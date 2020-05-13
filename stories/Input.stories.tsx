import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { FaKey, FaSearch, FaEnvelope } from "react-icons/fa";
import { Input } from "../src";

storiesOf("Input", module)
  .add("Default", () => {
    const [value, setValue] = useState("");
    return (
      <div style={{ width: 320 }}>
        <Input
          name="Name"
          placeholder="Type your name..."
          value={value}
          setValue={setValue}
          textColor="#fafafa"
        />
      </div>
    );
  })
  .add("With Icon", () => {
    const [value, setValue] = useState("");
    const [valueSearch, setSearch] = useState("");
    return (
      <div style={{ width: 320 }}>
        <Input
          name="Password"
          placeholder="Type your password"
          value={value}
          setValue={setValue}
          textColor="#fafafa"
          icon={<FaKey />}
          type="password"
        />
        <Input
          name="Search"
          placeholder="Search the name"
          value={valueSearch}
          setValue={setSearch}
          textColor="#fafafa"
          icon={<FaSearch />}
          iconPosition="left"
        />
      </div>
    );
  })
  .add("With Floating Label", () => {
    const [value, setValue] = useState(0);
    const [value2, setValue2] = useState("");
    const [value3, setValue3] = useState("");
    return (
      <div style={{ width: 320 }}>
        <Input
          name="Number"
          placeholder="Type your name..."
          value={value}
          setValue={setValue}
          textColor="#fafafa"
          floatingLabel={true}
          type="number"
        />
        <Input
          name="E-mail"
          placeholder="Example fulano@gmail.com"
          value={value2}
          setValue={setValue2}
          textColor="#fafafa"
          floatingLabel={true}
          type="email"
          icon={<FaEnvelope />}
          color="#e53935"
        />
        <Input
          name="Name"
          placeholder="Type your name..."
          value={value3}
          setValue={setValue3}
          textColor="#fafafa"
          floatingLabel={true}
          type="text"
          color="#ab47bc"
        />
      </div>
    );
  })
  .add("With Custom Validation", () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    function emailValidation(email: any) {
      const validation = /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/;
      if (email) {
        return validation.test(email);
      }
      return false;
    }

    function fieldValidation(value: any, length: number) {
      if (value && value.length < length) {
        return true;
      }
      return false;
    }

    return (
      <div style={{ width: 320 }}>
        <Input
          name="Name"
          placeholder="Type your name..."
          value={name}
          setValue={setName}
          textColor="#fafafa"
          floatingLabel={true}
          validation={!fieldValidation(name, 5)}
          errorMessage="Type a valid name"
        />
        <Input
          name="E-mail"
          placeholder="Example fulano@gmail.com"
          value={email}
          setValue={setEmail}
          textColor="#fafafa"
          floatingLabel={true}
          type="email"
          icon={<FaEnvelope />}
          validation={emailValidation(email)}
          errorMessage="Type a valid e-mail"
          color="#2196f3"
        />
      </div>
    );
  });
