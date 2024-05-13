import React, { useContext } from 'react'
import ContextData from './context/LibraryContext'
import { useFormik } from 'formik';

const validate = values => {
  const errors = {};

  if (!values.name) {
    errors.name = 'Required';
  } else if (values.name.length < 3) {
    errors.name = 'Must be 3 characters or more';
  }

  if (!values.birth) {
    errors.birth = 'Required';
  }

  if (!values.bio) {
    errors.bio = 'Required';
  } else if (values.bio.length < 10) {
    errors.bio = 'Must be 10 characters or more';
  }

  return errors;
};

const AddAuthor = () => {
  const { addAuthor } = useContext(ContextData);

  const formik = useFormik({
    initialValues: {
      name: '',
      birth: '',
      bio: '',
    },
    validate,
    onSubmit: values => {
      values.name = '',
        values.birth = '',
        values.bio = ''
    },
  })

  return (
    <>
      <div className='container p-5'>
        <h2 className='text-light'>Add New Author</h2>
        <form onSubmit={formik.handleSubmit}>
          <div className="row">
            <div className="mb-3 pt-3 col-lg-6">
              <label for="authorName " className="form-label text-light">Author Name:</label>
              <input type="text" className="form-control " id="authorName" placeholder=" "
                name='name'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.name}
              />
              {formik.touched.name && formik.errors.name ? (
                <div className='text-danger'>{formik.errors.name}</div>
              ) : null}
            </div>

            <div className="mb-3 pt-3 col-lg-6">
              <label for="birthDate " className="form-label text-light">Birth Date:</label>
              <input type="date" className="form-control " id="birthDate" placeholder=" "
                name='birth'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.birth}
              />
              {formik.touched.birth && formik.errors.birth ? (
                <div className='text-danger'>{formik.errors.birth}</div>
              ) : null}
            </div>

            <div className="mb-3 pt-3 col-lg-12">
              <label for="bioGraphy" className="form-label text-light">Short Biography:</label>
              <textarea className="form-control " id="bioGraphy" rows="3" style={{ fontWeight: "400", fontSize: "18px" }}
                name='bio'
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                value={formik.values.bio}
              >
              </textarea>
              {formik.touched.bio && formik.errors.bio ? (
                <div className='text-danger'>{formik.errors.bio}</div>
              ) : null}
            </div>
            <div className="col-12 text-center pt-3">
              <button className='btn btn-secondary card-button' type='submit' disabled={!(formik.isValid && formik.dirty)} onClick={() => {
                addAuthor(`${formik.values.name}, ${formik.values.birth}, ${formik.values.bio}`);
              }}>Add Author</button>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default AddAuthor
