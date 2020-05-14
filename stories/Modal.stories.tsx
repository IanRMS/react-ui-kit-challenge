import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Modal, Button } from "../src";
import { FaAirbnb } from "react-icons/fa";

storiesOf("Modal", module).add("Default", () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open modal</Button>
      <Modal
        title="Modal Title"
        open={open}
        setOpen={setOpen}
        closeOutsideClick={true}
        // icon={<FaAirbnb size={60} color="#e91e63" />}
      >
        A mensagem do bagulho vai aqui
        <Button
          backgroundColor="#ff8f00"
          fullSize={true}
          onClick={() => setOpen(false)}
        >
          Close modal
        </Button>
      </Modal>
    </>
  );
});
