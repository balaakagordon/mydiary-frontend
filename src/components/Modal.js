import React from 'react';

const Modal = ({ showModal, children}) => {
    const showHideClassName = showModal ? "modal display-block" : "modal display-none";

    return (
        <div className={showHideClassName}>
            <section className="modal-main">
                {children}
            </section>
        </div>
    );
}

export default Modal