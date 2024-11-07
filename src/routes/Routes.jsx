import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import Home from '../pages/Home';
import Statistics from '../pages/Statistics';
import Dashboard from '../pages/Dashboard'
import Details from '../pages/Details';
import ErrorPage from '../pages/ErrorPage'
import MyBarChart from '../pages/Chart';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '',
                element: <ErrorPage />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            },
            {
                path: '/details/:id',
                element: <Details />
            },
            {
                path: '/chart',
                element: <MyBarChart />
            }
        ]
    }
]);

export default routes