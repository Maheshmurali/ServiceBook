import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import LogIn from './Pages/LogIn'
import Form from './Pages/Form'
import { BrowserRouter as Router,Routes , Route   } from 'react-router-dom';


function App() {
  return (
    <div>
    <Router>
        <Routes>
            <Route exact path='/' element={<Home />} />
        </Routes>
        <Routes>
        <Route exact path='/login' element={<LogIn />} />
        </Routes>
        <Routes>
        <Route exact path='/about' element={<About />} />
        </Routes>
        <Routes>
        <Route exact path='/query' element={<Form />} />
        </Routes>
    </Router>
</div>
  )
}

export default App
