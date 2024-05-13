import React, { useContext } from 'react'
import ContextData from './context/LibraryContext'
import { Link, useParams } from 'react-router-dom';
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};

  if (!values.title) {
    errors.title = 'Required';
  } else if (values.title.length < 3) {
    errors.title = 'Must be 3 characters or more';
  }

  if (!values.author) {
    errors.author = 'Required';
  } else if (values.author.length < 3) {
    errors.author = 'Must be 3 characters or more';
  }

  if (!values.isbnNumber) {
    errors.isbnNumber = 'Required';
  } else if (values.isbnNumber.length < 10) {
    errors.isbnNumber = 'Must be 10 digit number';
  }

  if (!values.publicationDate) {
    errors.publicationDate = 'Required';
  }

  return errors;
};

const EditBook = () => {
  const { bookTitle, bookAuthor, publication_Date, ISBN_Number, updateBook } = useContext(ContextData);

  const urlId = useParams();

  const formik = useFormik({
    initialValues: {
      title: bookTitle,
      author: bookAuthor,
      isbnNumber: ISBN_Number,
      publicationDate: publication_Date
    },
    validate,
    onSubmit: values => {
      values.title = '',
        values.author = '',
        values.isbnNumber = '',
        values.publicationDate = ''
    },
  })

  return (
    <>
      <div className='container p-5'>
        <h2 className='text-light'>Edit Book</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="mb-3 pt-3 col-lg-6">
              <label htmlFor="bookTitle " className="form-label text-light">Book Title:</label>
              <input type="text" className="form-control " id="bookTitle" placeholder="The Secret"
                name='title'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.title}
              />

              {formik.touched.title && formik.errors.title ? (
                <div className='text-danger'>{formik.errors.title}</div>
              ) : null}
            </div>

            <div className="mb-3 pt-3 col-lg-6">
              <label htmlFor="authorname " className="form-label text-light">Author:</label>
              <input type="text" className="form-control " id="authorname" placeholder="R.S.Agarval"
                name='author'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.author}
              />

              {formik.touched.author && formik.errors.author ? (
                <div className='text-danger'>{formik.errors.author}</div>
              ) : null}

            </div>
            <div className="mb-3 pt-3 col-lg-6">
              <label htmlFor="ISBN " className="form-label text-light">ISBN Number:</label>
              <input type="tel" className="form-control " id="ISBN" placeholder="9783161484100"
                name='isbnNumber'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.isbnNumber}
              />


              {formik.touched.isbnNumber && formik.errors.isbnNumber ? (
                <div className='text-danger'>{formik.errors.isbnNumber}</div>
              ) : null}

            </div>
            <div className="mb-3 pt-3 col-lg-6">
              <label htmlFor="publicationDate " className="form-label text-light">Publication Date:</label>
              <input type="date" className="form-control " id="publicationDate" placeholder="15/02/1880"
                name='publicationDate'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.publicationDate}
              />
              {formik.touched.publicationDate && formik.errors.publicationDate ? (
                <div className='text-danger'>{formik.errors.publicationDate}</div>
              ) : null}
            </div>


            <div className="col-12 text-center pt-3">
              <Link to={'/searchbooks'} className='card-button text-decoration-none me-2' type='submit' onClick={() => updateBook(
                `${urlId.id},${formik.values.title}, ${formik.values.author}, ${formik.values.isbnNumber}, ${formik.values.publicationDate}`
              )}>Update</Link>
              <Link to={'/'} className='card-button text-decoration-none ms-2' type='submit' onClick={() => cancelEdit()}>Cancel</Link>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default EditBook