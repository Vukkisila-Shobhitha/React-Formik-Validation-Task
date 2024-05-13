import React, { useContext } from 'react'
import ContextData from './context/LibraryContext'
import { Link } from 'react-router-dom';

const BooksCard = ({ book }) => {
    const { removeBook, setBookTitle, setBookAuthor, setPublication_Date, setISBN_Number } = useContext(ContextData);

    return (
        <div className="col-lg-6">
            <div className="card border-shadow p-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-8 p-2 justify-content-center">
                            <h5 className="card-title">Title: {book.title}</h5>
                            <p className="card-text">Author: {book.author}</p>
                            <p className="card-text">ISBN No: {book.isbn_number}</p>
                            <p className="card-text">Publication Date: {book.publication_date}</p>
                        </div>
                        <div className="col-4 p-2 text-center button-group">
                            <Link to={`/editbook/${book.id}`} type='submit' className='card-button text-decoration-none' onClick={() => {
                                setBookTitle(book.title);
                                setBookAuthor(book.author);
                                setPublication_Date(book.publication_date);
                                setISBN_Number(book.isbn_number);
                            }}>Edit</Link>
                            <button className='card-button' onClick={() => removeBook(book.id)}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default BooksCard