import './Modal.css'
function Modal({ setShow }) {
    return (
        <div className="modal_background">
            <div className="modal_content">
                <h1>This is the model</h1>
                <button onClick={() => {
                    setShow(false)
                }}>Close</button>
            </div>
        </div>
    )
}

export default Modal