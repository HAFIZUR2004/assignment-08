import React from "react";
import { createBrowserRouter } from "react-router-dom";
import Root from "../../Pages/Root";
import ErrorPage from "../../Pages/ErrorPage";
import Home from "../../Pages/Home";
import Apps from "../../Pages/Apps";
import AppDetailCard from "../../Pages/AppDetailCard";
import Installation from "../../Pages/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "apps", element: <Apps /> },
      { path: "apps/:id", element: <AppDetailCard /> },
      { path: "installation", element: <Installation /> },
    ],
  },
]);
