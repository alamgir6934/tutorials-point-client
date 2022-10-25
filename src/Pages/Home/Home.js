import React from 'react';
import { Link } from 'react-router-dom';
import Main from '../../layout/Main';
import image from '../Books/image/exam.jpg.gif'

const Home = () => {
    return (
        <>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img src={image} className="max-w-sm rounded-lg shadow-2xl" alt='' />
                    <div>
                        <h1 className="text-5xl font-bold">Hire Best Tutors Around The World For Your Academic Success!</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <Link to='/register'><button className="btn btn-primary">Login</button></Link>
                    </div>
                </div>


            </div>
            <footer>copy right</footer></>
    );
};

export default Home;