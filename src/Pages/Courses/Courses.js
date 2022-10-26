import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseSummaryCart from '../CourseSummaryCart/CourseSummaryCart';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';

const Courses = () => {
    const allCourse = useLoaderData();
    console.log(allCourse)
    return (

        <div className='d-flex'>
            <div>
                <LeftSideNav></LeftSideNav>
            </div>
            <div className="grid grid-cols-2 gap-4 ml-28">
                {
                    allCourse.map(books => <CourseSummaryCart
                        key={books._id}
                        books={books}
                    ></CourseSummaryCart>)
                }
            </div>
        </div>

    );
};

export default Courses;