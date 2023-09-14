import { Fragment } from "react";
import ReactDOM from "react-dom";
import './FeedbackModal.css'

const Backdrop = (props) => {
  return <div className="backdrop" onClick={props.onCloseModal} />;
};

export const ModalOverlay = (props) => {
  return (
    <div className="modal">
        <h2>This is my modal</h2>
        <button onClick={props.onCloseModal}>Close</button>
    </div>
  );
};

const FeedbackModal = (props) => {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onCloseModal={props.onClick} />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay onCloseModal={props.onClick} />,
        document.getElementById("overlay-root")
      )}
    </Fragment>
  );
};

export default FeedbackModal;
