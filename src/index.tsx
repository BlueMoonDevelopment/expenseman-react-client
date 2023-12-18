import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Imprint from "./pages/Imprint";
import Successful from "./pages/auth/successful";
import Failed from "./pages/auth/failed";
import axios from "axios";
import {getUrl} from "./tools/Tools";
import Scripts from './Scripts';

function getRouter(signedIn: boolean) {
    return createBrowserRouter([
        {
            path: '/',
            element: <Layout signedIn={signedIn}/>,
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
}

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);

axios.get(getUrl('/auth/checksignedin'), {
    withCredentials: true,
    validateStatus: function (status) {
        return status < 500;
    }
}).then(res => {
    root.render(
        <RouterProvider router={getRouter(res.status === 200)}/>
    );
});


