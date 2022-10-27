import React from 'react';
import { useLoaderData } from 'react-router-dom';

const EnrollmentPage = () => {
    const PreminmCourse = useLoaderData();
    console.log(PreminmCourse)
    return (
        <div>
            <h1 className='text-center'>Buy your Course</h1>
            <>


            </>

        </div>
    );
};

export default EnrollmentPage;