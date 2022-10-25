import React from 'react';
import LeftSideNav from '../LeftSideNav/LeftSideNav';
import RightSideNav from '../RightSideNav/RightSideNav';

const Courses = () => {
    return (

        <div className="grid grid-rows-3 grid-flow-col gap-4">
            <div className="row-span-3 ...">
                <LeftSideNav></LeftSideNav>

            </div>
            <div className="col-span-4 ...">
                <RightSideNav></RightSideNav>

            </div>

        </div>

    );
};

export default Courses;