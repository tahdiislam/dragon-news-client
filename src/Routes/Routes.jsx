import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Catagory from "../Pages/Catagory";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import News from "../Pages/News";
import Register from "../Pages/Register";
import TermsAndCondition from "../Pages/TermsAndCondition";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/', element: <Main />, children: [
            { path: '/', element: <Home />, loader: () => fetch('https://dragon-news-server-snowy.vercel.app/news') },
            { path: '/category/:id', element: <Catagory />, loader: ({ params }) => fetch(`https://dragon-news-server-snowy.vercel.app/category/${params.id}`) },
            {
                path: 'news/:id',
                element: <PrivateRoute><News /></PrivateRoute>,
                loader: ({ params }) => fetch(`https://dragon-news-server-snowy.vercel.app/news/${params.id}`)
            },
            {
                path: '/login', element: <Login />
            },
            {
                path: '/register', element: <Register />
            },
            {
                path: '/terms', element: <TermsAndCondition />
            }
        ]
    }
])