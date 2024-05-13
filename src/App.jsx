import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'


import './App.css'
import Navbar from './Navbar'
import SearchBooks from './SearchBooks'
import { LibraryContext } from './context/LibraryContext'
import Dashboard from './Dashboard'
import { Route, Routes } from 'react-router-dom'
import AddBook from './AddBook'
import SearchAuthors from './SearchAuthors'
import AddAuthor from './AddAuthor'
import EditBook from './EditBook'
import EditAuthor from './EditAuthor'

function App() {


  return (
    <>
      <LibraryContext>
        <Navbar />
        <Routes>
          <Route path='/' element={<Dashboard />} />
          <Route path='/searchbooks' element={<SearchBooks />} />
          <Route path='/addbook' element={<AddBook />} />
          <Route path='/editbook'>
            <Route path=':id' element={<EditBook />} />
          </Route>
          <Route path='/searchauthors' element={<SearchAuthors />} />
          <Route path='/addauthor' element={<AddAuthor />} />
          <Route path='/editauthor'>
            <Route path=':id' element={<EditAuthor />} />
          </Route>
        </Routes>
      </LibraryContext>

    </>
  )
}

export default App