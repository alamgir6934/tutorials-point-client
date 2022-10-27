import React from 'react';
import { useContext } from 'react';
import { Button, Image } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';
import image from '../Header/image/img.jpg'


const Header = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.error(error))
    }

    return (
        <div className="navbar ">



            <div className="dropdown d-flex">
                <label tabIndex={0} className="btn btn-ghost lg:hidden d-flex">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 lg:hidden" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    <h1>HOME TUTOR</h1>
                </label>

                <ul tabIndex={0} className="menu menu-compact dropdown-content mt-52 p-2 shadow bg-base-100 rounded-box w-52  gap-4 ml-10">
                    <Link to='/home'><button>Home</button></Link>
                    <Link to='/course'><button>Course</button></Link>
                    <Link to='/faq'><button>FAQ</button></Link>
                    <Link to='/blog'><button>Blogs</button></Link>
                    <Link to='/login'><button>Log in</button></Link>
                    <Link to='/register'><button>SignUp</button></Link>
                </ul>

                <img className='w-16 h-16' src={image} alt="" />
            </div>
            <div className=" hidden lg:flex ml-52 mt-60 lg:mt-8">
                <ul className="menu menu-horizontal p-0 mr-12 gap-12">
                    <Link to='/home'><button>Home</button></Link>
                    <Link to='/course'><button>Course</button></Link>
                    <Link to='/faq'><button>FAQ</button></Link>
                    <Link to='/blog'><button>Blogs</button></Link>
                    {
                        user?.uid ?
                            <>
                                <span>{user?.displayName}</span>
                                <Button className='' onClick={handleLogOut} variant="light">Sign Out</Button>
                            </>
                            :
                            <>
                                <Button variant="light"><Link to='/login'>Login</Link></Button>
                                <Button variant="light"><Link to='/register'>Register</Link></Button>

                            </>

                    }
                    <Link to="/profile">
                        {
                            user?.photoURL ?
                                < Image style={{ height: '30px' }}
                                    roundedCircle src={user?.photoURL}></Image>
                                :
                                <FaUser></FaUser>

                        }
                    </Link>
                </ul>
            </div>
            <>
                {/* <Button className='lg:hidden' onClick={handleLogOut} variant="light">Sign Out</Button> */}
            </>
        </div>


    );
};

export default Header;