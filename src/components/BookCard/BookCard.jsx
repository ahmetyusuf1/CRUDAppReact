const BookCard = ({ bookInfo, handleModal, handleEditModal, handleRead }) => {
  // console.log(props);
  const { title, date, isRead, id } = bookInfo;
  return (
    <div className="d-flex justify-content-between align-items-center p-3 mt-5 border shadow">
      <div>
        <h5
          style={{
            textDecoration: isRead ? "line-through" : "none",
          }}
        >
          {title}
        </h5>
        <p>{date}</p>
      </div>

      <div className="btn-group">
        <button
          onClick={() => handleModal(id, title)}
          className="btn btn-danger"
        >
          Delete
        </button>
        <button
          onClick={() => handleEditModal(bookInfo)}
          className="btn btn-primary"
        >
          Edit
        </button>
        <button
          onClick={() => handleRead(bookInfo)}
          className="btn btn-success"
        >
          {isRead === false ? "Not Read" : "Read"}
        </button>
      </div>
    </div>
  );
};

export default BookCard;
