import React, { useContext } from 'react'
import AuthorsCard from './AuthorsCard'
import ContextData from './context/LibraryContext'

const SearchAuthors = () => {
  const { authorLists } = useContext(ContextData);

  return (
    <>
      {
        authorLists.length ? (
          <>
            <div className="container">
                <h2 className='text-start ps-5 ms-5 pt-3 text-light '>Authors</h2>
              <div className="container p-4 rounded">
                <div className="row row-gap-4">
                  {
                    authorLists.map((author) => <AuthorsCard key={author.id} author={author} />)
                  }
                </div>
              </div>
            </div>
          </>
        ) : (
          <div className='d-flex justify-content-center align-items-center' style={{ height: "80vh" }}>
            <p className='text-light'>Author List is Empty. Please add new Author.</p>
          </div>
        )
      }

    </>
  )
}

export default SearchAuthors