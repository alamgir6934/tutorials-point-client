import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
import image from '../Header/image/img.jpg'


const Header = () => {
    return (
        <div className="navbar">


            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>

                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52  gap-4 ml-10">
                        <Link to='/home'><button>Home</button></Link>
                        <Link to='/course'><button>Course</button></Link>
                        <Link to='/faq'><button>FAQ</button></Link>
                        <Link to='/blog'><button>Blogs</button></Link>
                        <Link to='/login'><button>Log in</button></Link>
                        <Link to='/register'><button>SignUp</button></Link>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">daisyUI</Link>
                <img className='w-16 h-16' src={image} alt="" />
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal p-0 mr-12 gap-12">
                    <Link to='/home'><button>Home</button></Link>
                    <Link to='/course'><button>Course</button></Link>
                    <Link to='/faq'><button>FAQ</button></Link>
                    <Link to='/blog'><button>Blogs</button></Link>
                    <Link to='/login'><button>Log in</button></Link>
                    <Link to='/register'><button>SignUp</button></Link>
                </ul>
            </div>
            <div className="navbar-end">
                <Link className="btn">Sign Out</Link>
            </div>
        </div>
    );
};

export default Header;