// src/Components/Routes/Routes.jsx
import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Root from '../../Pages/Root';
import ErrorPage from '../../Pages/ErrorPage';
import Home from '../../Pages/Home';
import Apps from '../../Pages/Apps';
import AppDetailCard from '../../Pages/AppDetailCard'; // ঠিক ফাইল নাম অনুযায়ী

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        path: "/",
        Component: Home,
      },
      {
        path: "/apps",
        Component: Apps,
      },
      {
        path: "/apps/:id", // dynamic route for individual app
        Component: AppDetailCard,
      },
    ],
  },
]);



// https://curious-beijinho-6e9514.netlify.app/apps
