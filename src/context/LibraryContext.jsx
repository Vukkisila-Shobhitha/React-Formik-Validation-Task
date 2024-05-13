import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react'

const ContextData = createContext({});
export const LibraryContext = ({ children }) => {

  // States
  const [bookLists, setBookLists] = useState([]);
  const [authorLists, setAuthorLists] = useState([]);
  const [apiState, setApiState] = useState(true);
  const [apiStates, setApiStates] = useState(true);

  const [bookTitle, setBookTitle] = useState('');
  const [bookAuthor, setBookAuthor] = useState('');
  const [publication_Date, setPublication_Date] = useState('');
  const [ISBN_Number, setISBN_Number] = useState('');

  const [authorName, setAuthorName] = useState('');
  const [authorBirth, setAuthorBirth] = useState('');
  const [authorBio, setAuthorBio] = useState('');

  // API Urls
  const BOOK_API_URL = 'https://660c281e3a0766e85dbd8fa0.mockapi.io/library';
  const AUTHOR_API_URL = 'https://660da3ee6ddfa2943b34e888.mockapi.io/libraryauthor'

  // Get data from book API
  useEffect(() => {
    const api_Response = async () => {
      try {
        const bookResponse = await axios.get(BOOK_API_URL);
        setBookLists(bookResponse.data)
      } catch (err) {
        console.log(err.response);
      }
    }

    api_Response();
  }, [apiState])

  // Get data from author API
  useEffect(() => {
    const apiRes = async () => {
      try {
        const authorResponse = await axios.get(AUTHOR_API_URL);
        setAuthorLists(authorResponse.data)
      } catch (err) {
        console.log(err.response);
      }
    }
    apiRes();
  }, [apiStates])

  // Function to Add new book
  const addBook = async (title) => {
    try {
      const input = title.split(",");
      const id = bookLists.length ? bookLists[bookLists.length - 1].id + 1 : 1;
      const add = { id, title: input[0], author: input[1], isbn_number: input[2], publication_date: input[3] }
      setBookLists(...bookLists, add);
      const response = await axios.post(BOOK_API_URL, add);

      setApiState(!apiState)
      setBookTitle('');
      setBookAuthor('');
      setPublication_Date('');
      setISBN_Number('');
    } catch (err) {
      console.log(err.response);
    }
  }

   // Function to remove book
  const removeBook = async (id) => {
    try {
      setBookLists(bookLists.filter((book) => book.id != id));
      await axios.delete(`${BOOK_API_URL}/${id}`)
      setApiState(!apiState)
    } catch (err) {
      console.log(err.response);
    }
  }

   // Function to Update book
  const updateBook = async (data) => {
    try {
      const input = data.split(",");
      const id = input[0];
      const newData = { id: id, title: input[1], author: input[2], isbn_number: input[3], publication_date: input[4] };
      setBookLists(bookLists.map((book) => book.id == id ? { ...newData } : book));
      const response = await axios.put(`${BOOK_API_URL}/${id}`, newData);
      setApiState(!apiState)

      setBookTitle('');
      setBookAuthor('');
      setPublication_Date('');
      setISBN_Number('');
    } catch (err) {
      console.log(err.response);
    }
  }

// Function to calcel and reset states
  const cancelEdit = () => {
    setBookTitle('');
    setBookAuthor('');
    setPublication_Date('');
    setISBN_Number('');
    setAuthorName('');
    setAuthorBirth('');
    setAuthorBio('');
  }

   // Function to Add new author
  const addAuthor = async (title) => {
    try {
      const input = title.split(",");
      const id = authorLists.length ? authorLists[authorLists.length - 1].id + 1 : 1;
      const add = { id, name: input[0], birth: input[1], bio: input[2] }
      setAuthorLists(...authorLists, add);
      const response = await axios.post(AUTHOR_API_URL, add);

      setAuthorName('')
      setAuthorBirth('')
      setAuthorBio('')
      setApiStates(!apiStates)
    } catch (err) {
      console.log(err.response);
    }
  }

   // Function to Remove author
  const removeAuthor = async (id) => {
    try {
      setAuthorLists(authorLists.filter((author) => author.id != id))
      await axios.delete(`${AUTHOR_API_URL}/${id}`)
      setApiStates(!apiStates)
    } catch (err) {
      console.log(err.response);
    }
  }

   // Function to Update a author
  const updateAuthor = async (data) => {
    try {
      const input = data.split(",");
      const id = input[0];
      const newData = { id: id, name: input[1], birth: input[2], bio: input[3] };
      setAuthorLists(authorLists.map((author) => author.id == id ? { ...newData } : author));
      const response = await axios.put(`${AUTHOR_API_URL}/${id}`, newData);
      setApiStates(!apiStates)

      setAuthorName('')
      setAuthorBirth('')
      setAuthorBio('')
    } catch (err) {
      console.log(err.response);
    }
  }

  return (
    <ContextData.Provider value={{
      bookLists, bookTitle, bookAuthor, publication_Date, ISBN_Number, setBookTitle, setBookAuthor, setPublication_Date, setISBN_Number, addBook, removeBook, updateBook, cancelEdit, addAuthor, removeAuthor, updateAuthor, authorLists, authorName, setAuthorName, authorBirth, setAuthorBirth, authorBio, setAuthorBio, bookTitle
    }}>
      {children}
    </ContextData.Provider>
  )
}

export default ContextData