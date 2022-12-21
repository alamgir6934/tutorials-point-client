import React from 'react';
// import { Link } from 'react-router-dom';
// import Main from '../../layout/Main';
import image from '../Books/image/exam.jpg.gif'
import SuccessRate from './SuccessRate/SuccessRate';

const Home = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200" style={{ backgroundImage: `url("https://i.ibb.co/6NhTWvq/e-learning-online-business-presentation-meeting-concept-31965-6336.webp")` }}>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    {/* <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt='' /> */}
                    <div>
                        <h1 className="text-5xl font-bold -mt-4">Hire Best Tutors Around The World For Your Academic Success!</h1>
                        <p className="py-6"></p>
                    </div>
                </div>


            </div>
            <SuccessRate></SuccessRate>

        </>
    );
};

export default Home;