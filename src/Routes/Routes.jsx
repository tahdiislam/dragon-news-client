import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Catagory from "../Pages/Catagory";
import Home from "../Pages/Home";
import News from "../Pages/News";

export const router = createBrowserRouter([
    {path: '/', element: <Main/>, children: [
        {path: '/', element: <Home/>},
        {path: 'category/:id', element: <Catagory/>},
        {path: 'news/:id', element: <News/>}
    ]}
])