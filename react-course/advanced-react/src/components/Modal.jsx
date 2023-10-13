import ReactDOM from "react-dom";

const Backdrop = (props) => {
  return (
    <>
      <h2>Backdrop</h2>
    </>
  );
};

const ModalOverlay = (props) => {
  return (
    <>
      <h2>Overlay</h2>
    </>
  );
};

const Modal = function (props) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.getElementById("backdrop-root")
      )}
      {ReactDOM.createPortal(
        <ModalOverlay />,
        document.getElementById("overlay-root")
      )}
    </>
  );
};

export default Modal;
