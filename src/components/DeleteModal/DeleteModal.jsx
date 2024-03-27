const DeleteModal = ({ setShowDeleteModal, handleDelete, bookTitle }) => {
  return (
    <div className="modal-container">
      <div className="modal-inner">
        <h5 className="lead">{bookTitle} | Do you want to delete?</h5>
        <button
          onClick={() => setShowDeleteModal(false)}
          className="btn btn-warning"
        >
          Cancel
        </button>
        <button onClick={() => handleDelete()} className="btn btn-danger">
          Accept
        </button>
      </div>
    </div>
  );
};

export default DeleteModal;
