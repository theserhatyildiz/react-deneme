import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './componenet/Register'
import Login from './componenet/Login'
import NotFound from './componenet/NotFound'
import Food from './componenet/Food'
import Private from './componenet/Private'
import Demo from './componenet/Demo'

import { UserContext } from './context/UserContext'
import { useEffect, useState } from 'react'

function App() {

  // ------------------Variables------------------

  const [loggedUser,setLoggedUser] = useState(JSON.parse(localStorage.getItem("app-user")));

 
  return (
    <>

    <UserContext.Provider value={{loggedUser,setLoggedUser}}>

      <BrowserRouter>
      
        <Routes>

            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/Food' element={<Private Component={Food}/>}/>
            <Route path='/demo' element={<Private Component={Demo}/>}/>
            <Route path='/*' element={<NotFound/>}/>

        </Routes>
      
      </BrowserRouter>

      </UserContext.Provider>

    </>
  )
}

export default App
