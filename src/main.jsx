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

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Router></Router>,
      children:[
        {
          path: "/",
          element:<HomePage></HomePage>,
        },
        {
          path: "/allreview",
          element:<AllReviews></AllReviews>,
        },
        {
          path: "/addreview",
          element:<AddReview></AddReview>,
        },
        {
          path: "/gamewatchlist",
          element:<GameWatchlist></GameWatchlist>,
        },
        {
          path: "/register",
          element:<Register></Register>,
        },
        {
          path: "/login",
          element:<Login></Login>,
        },
       
        
      ]
    },
  ]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
    <RouterProvider router={router} />
    </AuthProvider>
    
  </StrictMode>,
)