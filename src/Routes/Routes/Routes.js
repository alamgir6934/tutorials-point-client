import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Books from "../../Pages/Books/Books";
import Catagory from "../../Pages/Catagory/Catagory";
import Courses from "../../Pages/Courses/Courses";
import EnrollmentPage from "../../Pages/EnrollmentPage/EnrollmentPage";
import ErrorPage from "../../Pages/Error/ErrorPage";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";
import RightSideNav from "../../Pages/RightSideNav/RightSideNav";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },

            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Courses></Courses>,
                loader: () => fetch('http://localhost:5000/books')

            },
            {
                path: '/catagory/:id',
                element: <Catagory></Catagory>,
                loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)

            },
            {
                path: '/books/:id',
                element: <PrivateRoute><Books></Books></PrivateRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/books/${params.id}`)
            },
            {
                path: '/blog',
                element: <Blogs></Blogs>
            },
            {
                path: '/faq',
                element: <Faq></Faq>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '',
                element: <RightSideNav></RightSideNav>,

            },
            {
                path: '/enroll/:id',
                element: <EnrollmentPage></EnrollmentPage>
            }
        ]
    }

])