import "./modal.css";
const Modal = ({ handleClose, show, children }) => {
  const showHideClassName = show ? "modal display-block" : "modal display-none";
  return (
    <div className={showHideClassName} onClick={handleClose}>
      <section className='modal-main rounded-3'>
        {children}
        <button
          type='button'
          className='btn-close'
          aria-label='Close'
          onClick={handleClose}></button>
      </section>
    </div>
  );
};

export default Modal;
