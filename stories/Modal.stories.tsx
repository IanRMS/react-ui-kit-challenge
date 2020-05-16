import React, { useState } from "react";
import { storiesOf } from "@storybook/react";
import { Modal, Button } from "../src";
import { FaCheckDouble, FaTimes, FaExclamationTriangle } from "react-icons/fa";

storiesOf("Modal", module)
  .add("Default", () => {
    const [open, setOpen] = useState(false);

    return (
      <>
        <Button onClick={() => setOpen(true)}>Open modal</Button>
        <Modal
          title="Modal Title"
          open={open}
          setOpen={setOpen}
          closeOutsideClick={true}
          message="A mensagem do bagulho vai aqui"
        >
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
  })
  .add("Custom style", () => {
    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    return (
      <>
        <Button
          style={{ margin: 5 }}
          backgroundColor="#4caf50"
          onClick={() => setOpen(true)}
        >
          Open modal 1
        </Button>
        <Button
          style={{ margin: 5 }}
          backgroundColor="#f44336"
          onClick={() => setOpen2(true)}
        >
          Open modal 2
        </Button>
        <Button
          style={{ margin: 5 }}
          backgroundColor="#ffc107"
          onClick={() => setOpen3(true)}
          color="#424242S"
        >
          Open modal 3
        </Button>
        <Modal open={open} setOpen={setOpen}>
          <FaCheckDouble size={60} color="#4caf50" />
          <h2 style={{ marginTop: 10 }}>Custom Title</h2>
          <span style={{ margin: 10 }}>Custom message here</span>
          <Button
            backgroundColor="#4caf50"
            fullSize={true}
            onClick={() => setOpen(false)}
          >
            Close modal
          </Button>
        </Modal>
        <Modal open={open2} setOpen={setOpen2}>
          <FaTimes size={60} color="#f44336" />
          <h2>Custom Title</h2>
          <span style={{ margin: 10 }}>Custom message here</span>
          <Button
            backgroundColor="#f44336"
            fullSize={true}
            onClick={() => setOpen2(false)}
          >
            Close modal
          </Button>
        </Modal>
        <Modal open={open3} setOpen={setOpen3} closeOutsideClick={true}>
          <FaExclamationTriangle size={60} color="#ffc107" />
          <h2 style={{ marginTop: 10 }}>Custom Title</h2>
          <span style={{ margin: 10 }}>Custom message here</span>
          <Button
            backgroundColor="#ffc107"
            fullSize={true}
            onClick={() => setOpen3(false)}
            color="#424242"
          >
            Close modal
          </Button>
        </Modal>
      </>
    );
  });
