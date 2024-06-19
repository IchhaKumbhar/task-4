import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css';
import F12Main from './F12Main';

import LandingPage from './pages/LandingPage';


const router = createBrowserRouter([
  { path: '/', element: <F12Main /> },
{ path: '/LandingPage', element: <LandingPage /> },
]);

export default function App() {
  return (
    <RouterProvider router={router} />
  );
}