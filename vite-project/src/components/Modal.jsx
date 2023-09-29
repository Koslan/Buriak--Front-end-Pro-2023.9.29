import '../components/Modal.css';

function Modal({ setOpenModal, deleteEntry, entry }) {
    const confirmDelete = (entry) => {
        deleteEntry(entry);
        setOpenModal(false);
    }

    return (
        <section className='overlay'>
            <div className='modalWindow'>
                <header className='modalHeader'>
                    <h3>Confirmation</h3>
                    <button className='closeModal' onClick={() => setOpenModal(false)}>X</button>
                </header>
                <p>Are you sure you want to delete <strong>{entry.name}</strong>?</p>
                <footer className='modalFooter'>
                    <button className='confirmButton' onClick={() => confirmDelete(entry.id)}>Confirm</button>
                    <button className='cancelButton' onClick={() => setOpenModal(false)}>Cancel</button>
                </footer>
            </div>
        </section>
    );
}

export default Modal;