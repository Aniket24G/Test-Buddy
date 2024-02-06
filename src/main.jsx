import React from 'react'
import ReactDOM from 'react-dom/client'
import Page from './Page'
import './index.css'
import { Login, Questions, Report } from './Components/index'
import {Route, RouterProvider, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Page />}>
      <Route path='' element={<Login />}/>
      <Route path='questions' element={<Questions/>}/>
      <Route path='report' element={<Report/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>
)
