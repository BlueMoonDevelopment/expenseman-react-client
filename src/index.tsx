import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Imprint from "./pages/Imprint";
import Successful from "./pages/auth/successful";
import Failed from "./pages/auth/failed";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: 'imprint',
                element: <Imprint/>
            },
            {
                path: 'auth/success',
                element: <Successful/>,
            },
            {
                path: 'auth/failed',
                element: <Failed/>,
            },
            {
                path: '*',
                element: <NoPage/>
            }
        ]
    },
]);

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

root.render(
    <RouterProvider router={router}/>
);
