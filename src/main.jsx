import React from 'react'
import ReactDOM from 'react-dom/client'
import { Route, RouterProvider, createBrowserRouter, createRoutesFromElements } from 'react-router-dom'
import Layout from './layout'
import Home from './Components/Home/home'
import About from './Components/About/about'
import Contact from './Components/Contacts/contact'
import User from './Components/Users/User'
import Github,{githubApiLoader} from './Components/Github/github'
import './index.css'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />}>
      <Route path='' element={<Home/>} />
      <Route path='about' element={<About/>} />
      <Route path='contact' element={<Contact/>} />
      <Route path='user/:userId' element={<User/>} />
      <Route path='github' loader={githubApiLoader} element={<Github/>} />
    </Route>
  )
//   [
//   {

//     path: '/',
//     element: <Layout />,
//     children: [
//       {
//         path: "",
//         element:<Home/>
//       },
//       {
//         path: "about",
//         element:<About/>
//       },
//       {
//         path: "contact",
//         element:<Contact/>
//       }, {
//         path: "user/:userId",
//         element:<User/>
//       }, {
//         path: "github",
//         loader:{githubApiLoader},
//         element:<Github/>
//       }
//     ]
//   }
  // ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
