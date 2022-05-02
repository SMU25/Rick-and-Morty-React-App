function ModalWindow({ opened, onClose, text = "" }) {
  return (
    <div className={`overlay ${opened ? "overlay--visible" : ""}`}>
      <div className="modal-window">
        <p className="modal-window__text"> {text}</p>
        <button className="close" onClick={() => onClose(false)}>
          Close
        </button>
      </div>
    </div>
  );
}

export default ModalWindow;
