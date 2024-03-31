import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Register from './componenet/Register'
import Login from './componenet/Login'
import NotFound from './componenet/NotFound'
import Diet from './componenet/Diet'

function App() {


  return (
    <>
     
      <BrowserRouter>
      
        <Routes>

            <Route path='/' element={<Login/>}/>
            <Route path='/login' element={<Login/>}/>
            <Route path='/register' element={<Register/>}/>
            <Route path='/diet' element={<Diet/>}/>
            <Route path='/*' element={<NotFound/>}/>

        </Routes>
      
      </BrowserRouter>

    </>
  )
}

export default App
