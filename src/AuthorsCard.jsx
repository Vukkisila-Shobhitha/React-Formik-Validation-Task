import React, { useContext } from 'react'
import { Link } from 'react-router-dom';
import ContextData from './context/LibraryContext';

const AuthorsCard = ({ author }) => {
    const { setAuthorName, setAuthorBirth, setAuthorBio, removeAuthor } = useContext(ContextData);
    return (
        <div className="col-lg-6">
            <div className="card border-shadow p-2">
                <div className="card-body">
                    <div className="row">
                        <div className="col-8 p-2 justify-content-center">
                            <h5 className="card-title">Author name : {author.name}</h5>
                            <p className="card-text">birth: {author.birth}</p>
                            <p className="card-text">Bio: {author.bio}</p>

                        </div>
                        <div className="col-4 p-2 text-center button-group">
                            <Link to={`/editauthor/${author.id}`} type='submit' className='card-button text-decoration-none' onClick={() => {
                                setAuthorName(author.name);
                                setAuthorBirth(author.birth);
                                setAuthorBio(author.bio);
                            }}>Edit</Link>
                            <button className='card-button' onClick={() => removeAuthor(author.id)}>Remove</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AuthorsCard