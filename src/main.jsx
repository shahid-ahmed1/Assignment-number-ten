import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
    createBrowserRouter,
    RouterProvider,
  } from "react-router-dom";
import Router from './components/router/Router.jsx';
import Navbar from './components/Navbar.jsx';
import HomePage from './pages/HomePage/HomePage.jsx';
import AllReviews from './pages/AllReviews/AllReviews.jsx';
import AddReview from './pages/AddReview/AddReview.jsx';
import GameWatchlist from './pages/GameWatchlist/GameWatchlist.jsx';
import Register from './pages/Register/Register.jsx';
import Login from './pages/Login/Login.jsx';
import AuthProvider from './authprovider/AuthProvider.jsx';
import { ToastContainer } from 'react-toastify';
import PrivateRoute from './components/PrivateRoute/PrivateRoute.jsx';
import MyReview from './pages/MyReview/MyReview.jsx';
import ReviewCard from './components/ReviewCard/ReviewCard.jsx';
import ReviewDetails from './components/ReviewDetails/ReviewDetails.jsx';
import UpdatedReview from './components/UpdatedReview/UpdatedReview.jsx';

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Router></Router>,
      children:[
        {
          path: "/",
          element:<HomePage></HomePage>,
          loader:()=> fetch(`http://localhost:5000/review`)
        },
        // {
        //   path: "/card",
        //   element:<ReviewCard></ReviewCard>,
        // },
        {
          path: "/allreview",
          element:<AllReviews></AllReviews>,
          loader:()=> fetch(`http://localhost:5000/review/all`)
        },
        {
          path: "/addreview",
          element:<AddReview></AddReview>,
        },
        {
          path: "/updateReview/:id",
          element:<UpdatedReview></UpdatedReview>,
          loader:({params})=>fetch(`http://localhost:5000/review/${params.id}`)
        },
        {
          path: "/gamewatchlist",
          element:<PrivateRoute><GameWatchlist></GameWatchlist></PrivateRoute>,
        },
        {
          path: "/myreview/:email",
          element:<PrivateRoute><MyReview></MyReview></PrivateRoute>,
          loader:({params})=> fetch(`http://localhost:5000/myreview/${params.email}`)
        },
        {
          path: "/register",
          element:<Register></Register>,
        },
        {
          path: "/login",
          element:<Login></Login>,
        },
       {
        path:'/review/:id',
        element:<PrivateRoute><ReviewDetails></ReviewDetails></PrivateRoute>,
        loader:({params})=>fetch(`http://localhost:5000/review/${params.id}`)
       }
        
      ]
    },
  ]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    <ToastContainer></ToastContainer>
  </StrictMode>,
)