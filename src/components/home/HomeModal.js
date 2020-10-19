import React from 'react';
import Modal from 'react-modal';
 

const customStyles = {
    content : {
      top                   : '50%',
      left                  : '50%',
      right                 : 'auto',
      bottom                : 'auto',
      marginRight           : '-50%',
      transform             : 'translate(-50%, -50%)'
    }
};

Modal.setAppElement('#root');

export const HomeModal = () => {
    
    const closeModal = () => { }


    return (
        <Modal
            isOpen={false}
            onRequestClose={closeModal}
            closeTimeoutMS={200}
            style={customStyles}
            className="modal"
            overlayClassName="modal-fondo"
        > 
            <h1 align="center">Download</h1>
            <hr />
            <form className="container">
                <div className="form-group">
                    <label>Name</label>
                    <input 
                        type="text" 
                        className="form-control"
                        placeholder="Name of the picture"
                        name="title"
                        autoComplete="off"
                    />
                </div>
                <button
                    type="submit"
                    className="btn btn-outline-primary btn-block"
                >
                    <i className="fas fa-download"></i>
                    <span> Download</span>
                </button>
            </form>
        </Modal>
    )
}
