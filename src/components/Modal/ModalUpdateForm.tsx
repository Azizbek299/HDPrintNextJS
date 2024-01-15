import { useState } from "react";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import CategoryForm from "../Category/CategoryForm";

function ModalFormForUpdate(props: any) {
  const values = [true]; //  ['xl-down', 'xxl-down' ,'sm-down', 'md-down', 'lg-down', ]
  const [fullscreen, setFullscreen] = useState(true);
  const [show, setShow] = useState<boolean>(false);

  function handleShow(breakpoint: any) {
    setFullscreen(breakpoint);
    setShow(true);
  }

  function submited() {
    setShow(false)
  }
  

  return (
    <>
      {values.map((v: any, idx) => (
        <Button
          key={idx}
          className="btn me-3 py-2 mb-1"
          active={false}
          variant="success"
          onClick={() => handleShow(v)}
        >
          Update
          {typeof v === "string" && `below ${v.split("-")[0]}`}
        </Button>
      ))}

      <Modal
        show={show}
        fullscreen={fullscreen as any}
        onHide={() => setShow(false)}
      >
        <Modal.Header closeButton>
          <Modal.Title>Update</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="mx-20">
            <CategoryForm functionForData={props.update} item={props.item} submited={submited}/>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default ModalFormForUpdate;
