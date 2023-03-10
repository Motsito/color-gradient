import React from 'react'
import Main from './routes/Main';
import { createRoot } from "react-dom/client";
import {
    createBrowserRouter,
    RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
    {
        path: "/",
        element: (
            <Main />
        ),
    },
    {
        path: "about",
        element: <div>About</div>,
    },
]);
createRoot(document.getElementById("root")).render(
    <RouterProvider router={router} />
);