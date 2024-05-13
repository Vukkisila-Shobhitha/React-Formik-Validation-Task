import React, { useContext } from 'react'
import ContextData from './context/LibraryContext'
import BooksCard from './BooksCard'

const SearchBooks = () => {
  const { bookLists } = useContext(ContextData);
  return (
    <>
      {
        bookLists.length ? (
          <div className="container">
            <h2 className='text-start ps-5 ms-5 text-light pt-3'>Books</h2>
            <div className="container p-4 rounded">
              <div className="row row-gap-4">
                {
                  bookLists.map((book) => <BooksCard key={book.id} book={book} />)
                }
              </div>
            </div>
          </div>
        ) : (
          <div className='d-flex justify-content-center align-items-center' style={{ height: "80vh" }}>
            <p className='text-light'>Books List is Empty. Please add new Book.</p>
          </div>
        )
      }

    </>
  )
}

export default SearchBooks