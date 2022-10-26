import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCart from '../CourseSummaryCart/CourseSummaryCart';
import LeftSideNav from '../LeftSideNav/LeftSideNav';

const Catagory = () => {
    const CategoriesBooks = useLoaderData();
    console.log(CategoriesBooks)

    return (
        <div className="d-flex gap-x-28 lg:card-side bg-base-100 shadow-xl">
            <LeftSideNav></LeftSideNav>
            <div className="card-body">
                {
                    CategoriesBooks.map(books => <CourseSummaryCart
                        key={books._id}
                        books={books}

                    ></CourseSummaryCart>)
                }
            </div>
        </div>


    );
};

export default Catagory;