import App from "../App";
import Home from "../pages/home/Home";
import CartPage from "../pages/books/CartPage";
import {
    createBrowserRouter
}from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {
                path: "/",
                element: <Home/>,
            },
            {
                path: "/orders",
                element: <div>orders</div>
            },
            {
                path: "/about",
                element: <div>About</div>
            },
            {
                path: "/cart",
                element:<CartPage/>
            }
        ]
    },
]);

export default router;
