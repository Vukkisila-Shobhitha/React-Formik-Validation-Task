import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg sticky-top" style={{ backgroundColor: "black" }}>
        <div className="container-fluid p-1">
          <h2 className="fw-bold text-light ps-2" href="#">Library Admin</h2>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav fw-bold">
              <li className="nav-item pe-2 ">
                <Link className="nav-link text-light" to={'/'}>DashBoard</Link>
              </li>
              <li className="nav-item pe-2">
                <Link className="nav-link text-light" to={'/searchbooks'}>Search Books</Link>
              </li>
              <li className="nav-item pe-2">
                <Link className="nav-link text-light" to={'/addbook'}>Add Book</Link>
              </li>
              <li className="nav-item pe-2">
                <Link className="nav-link text-light" to={'/searchauthors'}>Search Authors</Link>
              </li>
              <li className="nav-item pe-2">
                <Link className="nav-link text-light" to={'/addauthor'}>Add Author</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  )
}

export default Navbar