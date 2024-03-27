const EditModal = ({
  setShowEditModal = () => {},
  editObject = {},
  setEditObject = {},
  handleEditBook = () => {},
}) => {
  return (
    <div className="modal-container">
      <div className="modal-inner">
        <h5 className="lead text-center">Edit Book Name</h5>
        <input
          onChange={(e) =>
            setEditObject({ ...editObject, title: e.target.value })
          }
          type="text"
          value={editObject.title}
          className="form-control"
        />

        <div className="d-flex justify-content-between">
          <button
            onClick={() => setShowEditModal(false)}
            className="btn btn-warning"
          >
            Cancel
          </button>
          <button onClick={() => handleEditBook()} className="btn btn-success">
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default EditModal;
