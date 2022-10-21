import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Catagory from "../Pages/Catagory";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import News from "../Pages/News";
import Register from "../Pages/Register";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
    {path: '/', element: <Main/>, children: [
        { path: '/', element: <Home />, loader: () => fetch('http://localhost:5000/news')},
        { path: '/category/:id', element: <Catagory />, loader: ({ params }) => fetch(`http://localhost:5000/category/${params.id}`)},
        { 
            path: 'news/:id', 
            element: <PrivateRoute><News/></PrivateRoute> , 
            loader: ({params}) => fetch(`http://localhost:5000/news/${params.id}`)
        },
        {
            path: '/login', element: <Login/>
        },
        {
            path: '/register', element: <Register/>
        }
    ]}
])