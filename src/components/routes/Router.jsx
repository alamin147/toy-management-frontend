import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Home from "../home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import AddToys from "../addtoys/AddToys";
import SingleToy from "../singleToy/SingleToy";
import AllToys from "../allToys/AllToys";
import MyToys from "../myToys/MyToys";
import UpdateToys from "../updateToys/UpdateToys";
import Register from "../register/Register";
import Login from "../login/Login";
import PrivateRoute from "../privateRoute/PrivateRoute";
import ErrorPage from "../errorPage/ErrorPage";
import Blog from "../blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      { path: "/", element: <Home></Home> },
      {
        path: "/addToys",
        element: (
          <PrivateRoute>
            <AddToys></AddToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/viewSingleToy/:id",
        element: (
          <PrivateRoute>
            <SingleToy></SingleToy>
          </PrivateRoute>
        ),
      },
      { path: "/allToysShop", element: <AllToys></AllToys> },
      {
        path: "/myToys",
        element: (
          <PrivateRoute>
            <MyToys></MyToys>
          </PrivateRoute>
        ),
      },
      {
        path: "/updateToys/:id",
        element: <UpdateToys></UpdateToys>,
        loader: ({ params }) =>
          fetch(`https://wonder-eight.vercel.app/singleToy/${params.id}`),
      },
      { path: "/register", element: <Register></Register> },
      { path: "/login", element: <Login></Login> },
      { path: "/blog", element: <Blog></Blog> },
    ],
  },
]);

export default router;
