import React from 'react';
import ReactDOM from 'react-dom/client';
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Layout from "./pages/layout/Layout";
import Successful from "./pages/auth/successful";
import Failed from "./pages/auth/failed";
import axios from "axios";
import {getUrl} from "./tools/Tools";

// material ui default font
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';

// Material UI
import { ThemeProvider } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import theme from './theme';

// Pages
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Imprint from "./pages/Imprint";
import Account from "./pages/Account";

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
                    path: 'account',
                    element: <Account/>
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
        <ThemeProvider theme={theme}>
            <CssBaseline />
            <RouterProvider router={getRouter(res.status === 200)}/>
        </ThemeProvider>
    );
});


