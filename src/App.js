import { useState } from "react";
import Header from "./components/Header/Header";
import { toast } from "react-toastify";
import { v4 } from "uuid";
import BookCard from "./components/BookCard/BookCard";
import DeleteModal from "./components/DeleteModal/DeleteModal";
import EditModal from "./components/EditModal/EditModal";

function App() {
  const [bookName, setBookName] = useState("");

  const [books, setBooks] = useState([]);

  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const [showEditModal, setShowEditModal] = useState(false);

  const [deleteID, setDeleteID] = useState(null);

  const [deleteTitle, setDeleteTitle] = useState("");

  const [editObject, setEditObject] = useState({});

  const handleChange = (e) => {
    // console.log(e.target.value)
    setBookName(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!bookName) {
      toast.warn("PLEASE ENTER BOOK NAME", { autoClose: 1000 });
      return;
    }

    const newBook = {
      id: v4(),
      title: bookName,
      date: new Date().toLocaleString(),
      isRead: false,
    };

    // console.log(newBook);

    setBooks([...books, newBook]);

    toast.success("BOOK ADDED SUCCESSFULLY", { autoClose: 1000 });

    setBookName("");
  };

  const handleModal = (deleteBookID, deleteBookTitle) => {
    setDeleteID(deleteBookID);
    setDeleteTitle(deleteBookTitle);
    setShowDeleteModal(true);
  };

  const handleDelete = () => {
    // console.log("delete func")

    const filteredBooks = books.filter((book) => book.id !== deleteID);

    // console.log(filteredBooks);

    setBooks(filteredBooks);
    setShowDeleteModal(false);

    toast.error("BOOK DELETED SUCCESSFULLY", { autoClose: 1000 });
  };

  const handleEditModal = (editBook) => {
    setEditObject(editBook);
    setShowEditModal(true);
  };

  const handleEditBook = () => {
    // console.log("Edit func")

    const editIndex = books.findIndex((book) => book.id === editObject.id);

    const cloneBooks = [...books];

    cloneBooks.splice(editIndex, 1, editObject);

    setBooks(cloneBooks);
    setShowEditModal(false);

    toast.info("BOOK EDİTED SUCCESSFULLY", { autoClose: 1000 });
  };

  const handleRead = (readBook) => {
    const updateBook = { ...readBook, isRead: !readBook.isRead };

    console.log("read func");
    const index = books.findIndex((book) => book.id === readBook.id);

    const cloneBooks = [...books];
    cloneBooks[index] = updateBook;
    setBooks(cloneBooks);
  };

  return (
    <div>
      <Header />
      <div className="container">
        <form className="mt-4 d-flex gap-2" onSubmit={handleSubmit}>
          <input
            value={bookName}
            onChange={handleChange}
            placeholder="Enter a book name.."
            className="form-control"
            type="text"
          />
          <button className="btn btn-warning px-4">Add</button>
        </form>
        {}
        {books.length === 0 ? (
          <h3 className="mt-2">No books added</h3>
        ) : (
          books.map((book) => (
            <BookCard
              handleEditModal={handleEditModal}
              handleModal={handleModal}
              bookInfo={book}
              key={bookName.id}
              handleRead={handleRead}
            />
          ))
        )}
      </div>
      {showDeleteModal && (
        <DeleteModal
          bookTitle={deleteTitle}
          handleDelete={handleDelete}
          setShowDeleteModal={setShowDeleteModal}
        />
      )}
      {showEditModal && (
        <EditModal
          handleEditBook={handleEditBook}
          editObject={editObject}
          setEditObject={setEditObject}
          setShowEditModal={setShowEditModal}
        />
      )}
    </div>
  );
}

export default App;
