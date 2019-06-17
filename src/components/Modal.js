import React from 'react';

const Modal = ({ handleClose, showModal, children}) => {
    const showHideClassName = showModal ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
                {/* <button onClick={handleClose}>cancel</button> */}
            </section>
        </div>
    );
}

export default Modal