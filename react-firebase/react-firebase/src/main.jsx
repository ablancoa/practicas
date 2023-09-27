import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import App from './routes/App'
import Login from './routes/Login'
import Dashboard from './routes/Dashboard'
import DashboardProfile from './routes/DashboardProfile'
import Signout from './routes/Signout'
import PublicProfile from './routes/PublicProfile'
import ChoseUsername from './routes/ChoseUsername'

import './style/tailwind.css'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Page not found</h1>
  },
  {
    path: "login",
    element: <Login />
  },
  {
    path: "dashboard",
    element: <Dashboard/>
  },
  {
    path: "dashboard/profile",
    element: <DashboardProfile/>
  },
  {
    path: "signout",
    element: <Signout/>
  },
  {
    pssth: "u/:username",
    element: <PublicProfile />
  },
  {
    path: "choose-username",
    element: <ChoseUsername />
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
