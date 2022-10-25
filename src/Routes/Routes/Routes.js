import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Blogs from "../../Pages/Blogs/Blogs";
import Books from "../../Pages/Books/Books";
import Catagory from "../../Pages/Catagory/Catagory";
import Courses from "../../Pages/Courses/Courses";
import Faq from "../../Pages/Faq/Faq";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login/Login";
import Register from "../../Pages/Login/Register/Register";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [

            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/course',
                element: <Courses></Courses>
            },
            {
                path: '/catagory/:id',
                element: <Catagory></Catagory>
            },
            {
                path: '/books/:id',
                element: <Books></Books>
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
        ]
    }

])