import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "tw-elements-react/dist/css/tw-elements-react.min.css";
import { Provider } from 'react-redux';
import store from './app/store.js'

import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './components/Home.jsx';
import ErrorPage from './components/ErrorPage.jsx';
import Login_form from './components/Login_form.jsx';
import Registration_Form from './components/Registration_Form.jsx';
import ConfirmUser from './components/ConfirmUser.jsx';




  const router = createBrowserRouter([
    {
      path: "/",
      element: <App />,
      errorElement: <ErrorPage />,
      children: [
        {
          path: "/",
          element: <Login_form />
        }, 
        {
          path: "home",
          element: <Home />,
        },
        {
          path: "registration",
          element: <Registration_Form />
        },
        {
          path: "/confirmuser",
          element: <ConfirmUser />
        }
      ]
    }
  ])

  ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
      <Provider store={store}>
        <RouterProvider router={router}>
          <App />
        </RouterProvider>
      </Provider>
    </React.StrictMode>,
  );