import React from 'react';
import { Link } from 'react-router-dom';

const CourseSummaryCart = ({ books }) => {
    const { _id, title, author, details, image_url, total_view } = books

    // console.log(books)
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image_url} alt="course" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    {
                        details.length > 200 ?
                            <>{details.slice(0, 250) + '...'} <Link to={`/books/${_id}`}>Read more</Link> </>
                            :
                            <>{details}</>
                    }
                    <div className="card-actions">
                        <button className="btn btn-primary">Course Details</button>
                        <button className="btn btn-primary">Premium</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CourseSummaryCart;