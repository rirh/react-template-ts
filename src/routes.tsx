import React from 'react';
import { useRoutes, Navigate } from "react-router-dom";
import App from '@/App'


const Routes: React.FC = () => {
    return useRoutes([
        {
            path: "/",
            element: <App />,
            children: [{
                path: '404',
                element: <App />,
            }]
        },
        { path: "*", element: <Navigate to="/404" replace /> },
    ]);
};

export default Routes
