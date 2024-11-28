import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './pages/Login'
import RegisterPage from './pages/Register'

function App() {

  return (
    <Router>
      <Routes>
        <Route exact path='/' element={<LoginPage />}></Route>
        <Route  path='/register' element={<RegisterPage />}></Route>
      </Routes>
    </Router>
  )
}

export default App
