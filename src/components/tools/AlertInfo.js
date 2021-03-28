import React, { useState } from 'react'
import { Alert, Button, Modal} from 'react-bootstrap'
import AboutBody from './AboutBody';
import InfoBody from './InfoBody';

const AlertInfoModal = (props) => {
  return (
    <Modal
      {...props}
      size="xl"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Create Exam
          </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <AboutBody />
        <InfoBody />
      </Modal.Body>
      <Modal.Footer>
        <Button variant="danger" size="sm" onClick={props.onHide}>Kapat</Button>
      </Modal.Footer>
    </Modal>
  );
}

const AlertInfo = () => {
  const [show, setShowInfo] = useState(true);
  const [modalShow, setModalShow] = useState(false);

  return (
    <>
        <Alert variant="warning" className="btn btn-block " show={show} onClose={() => setShowInfo(false)} dismissible>
          <Alert.Heading as="button" className="btn btn-block font-weight-bold" onClick={() => setModalShow(true)}>
            Site içeriği ve nasıl kullanılacağı ile ilgili bilgi almak ister misiniz?
                </Alert.Heading>
        </Alert>

      <AlertInfoModal
        show={modalShow}
        onHide={() => setModalShow(false)}
      />
    </>
  );
}
export default AlertInfo
