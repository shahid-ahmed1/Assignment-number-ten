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
          element:<HomePage></HomePage>,
        },
        {
          path: "/login",
          element:<HomePage></HomePage>,
        },
       
        
      ]
    },
  ]);
createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)