import React from 'react'
import Home from './Pages/Home'
import About from './Pages/About'
import LogIn from './Pages/LogIn'
import Form from './Pages/Form'
import { BrowserRouter as Router,Routes , Route   } from 'react-router-dom';
import AdminPage from './Pages/AdminPage'
import Pages from './Store/AdminPageContext'

function App() {
  return (
    <div>
      <Pages>
    <Router>
        <Routes>
            <Route exact path='/' element={<Home />} />
            <Route exact path='/login' element={<LogIn />} />
            <Route exact path='/about' element={<About />} />
            <Route exact path='/query' element={<Form />} />
            <Route exact path='/admin' element={<AdminPage />} />
        </Routes>
    </Router>
    </Pages>
</div>
  )
}

export default App
