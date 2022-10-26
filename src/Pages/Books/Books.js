import React, { useEffect, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Books = () => {
    const books = useLoaderData();
    const { title, details, image_url, category_id } = books;
    console.log(books)

    return (
        <div className='ml-96'>
            <div className="card w-96 bg-base-100 shadow-xl">
                <figure className="px-10 pt-10">
                    <img src={image_url} alt="course" className="rounded-xl" />
                </figure>
                <div className="card-body items-center text-center">
                    <h2 className="card-title">{title}</h2>
                    <p>{details}</p>
                    <div className="card-actions">
                        <Link to={`/catagory/${category_id}`}>
                            <button className="btn btn-primary">Buy Now</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Books;

