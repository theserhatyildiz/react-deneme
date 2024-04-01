import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './componenet/Register'
import Login from './componenet/Login'
import NotFound from './componenet/NotFound'
import Diet from './componenet/Diet'
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
            <Route path='/diet' element={<Private Component={Diet}/>}/>
            <Route path='/demo' element={<Private Component={Demo}/>}/>
            <Route path='/*' element={<NotFound/>}/>

        </Routes>
      
      </BrowserRouter>

      </UserContext.Provider>

    </>
  )
}

export default App
