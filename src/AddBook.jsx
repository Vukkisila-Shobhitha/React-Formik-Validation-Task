import React, { useContext } from 'react'
import ContextData from './context/LibraryContext'
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

const AddBook = () => {

  const { addBook } = useContext(ContextData);

  const formik = useFormik({
    initialValues: {
      title: '',
      author: '',
      isbnNumber: '',
      publicationDate: ''
    },
    validate,
    onSubmit: values => {
      values.title = '',
        values.author = '',
        values.isbnNumber = '',
        formik.values.publicationDate = ''
    },
  })

  return (
    <>
      <div className='container p-5'>
        <h2 className='text-light'>Add New Book</h2>
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
              <button className='btn btn-secondary card-button' type='submit' disabled={!(formik.isValid && formik.dirty)} onClick={() => {
                addBook(`${formik.values.title}, ${formik.values.author}, ${formik.values.isbnNumber}, ${formik.values.publicationDate}`);
              }}>Add Book</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddBook