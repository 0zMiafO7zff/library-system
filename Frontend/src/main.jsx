import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import BorrowBook_main from './components/BorrowBook_main.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BorrowBook_main />
  </React.StrictMode>,
)




// ( รอแก้ Router )

// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <BorrowBook_main/>
//   },
  
// ])

// ReactDOM.createRoot(document.getElementById('root')).render(
//   <React.StrictMode>
//     <RouterProvider router={router} />
//   </React.StrictMode>,
// )