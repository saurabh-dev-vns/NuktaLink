import React from "react";
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Home from './pages/Home/Home'
import NavBar from "./components/Navbar/NavBar";
function App() {

  return (
    <Router>
      <div className="min-h-screen flex justify-center w-full bg-white dark:bg-gray-900 text-black dark:text-white" >

      <header className="fixed flex justify-center min-w-0 items-center top-3 z-50 w-4/5  border border-gray-200 dark:bg-gray-800 dark:border-gray-700 rounded-lg">
        <NavBar/>
      </header>
      <Routes>
       <Route path='/' element={<Home/>}/>
      </Routes>
      </div>
    </Router>
  )
}

export default App
