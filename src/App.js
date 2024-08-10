import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import TecLogIn from './Pages/TecLogIn'
import Form from './Pages/Form'
import { BrowserRouter as Router,Routes , Route   } from 'react-router-dom';
import AdminPage from './Pages/AdminPage'
import Pages from './Store/AdminPageContext'
import TechPage from './Pages/TechPage'

function App() {
  return (
    <div>
      <Pages>
    <Router>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<TecLogIn />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/query' element={<Form />} />
            <Route exact path='/admin' element={<AdminPage />} />
            <Route exact path='/techlogin' element={<TechPage />} />
        </Routes>
    </Router>
    </Pages>
</div>
  )
}

export default App
